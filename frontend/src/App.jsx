import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userInput,
      });

      console.log("Backend reply:", res.data);

      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      const errorMsg = {
        sender: "bot",
        text: "⚠️ Server error. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <div className="chat-container">
      <h1>💬 AI Chatbot</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
