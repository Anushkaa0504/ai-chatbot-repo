import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
console.log("✅ Gemini Key loaded:", process.env.GEMINI_API_KEY ? "Yes" : "No");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://ai-chatbot-repo-pr81-p8x77vwk7-anushkaa0504s-projects.vercel.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🎬 Fetch IMDb Data
async function getIMDbData(query) {
  try {
    const cleanQuery = query.replace(/tell me about/i, "").trim();
    console.log("🎬 Fetching IMDb data for:", cleanQuery);

    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        t: cleanQuery,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "True") {
      const { Title, Year, Genre, Plot, imdbRating } = response.data;
      console.log("✅ IMDb Data:", response.data.Title);
      return `🎬 ${Title} (${Year})
Genre: ${Genre}
IMDb Rating: ⭐ ${imdbRating}/10
Plot: ${Plot}`;
    } else {
      console.warn("⚠ IMDb says no result for:", cleanQuery);
      return `No IMDb data found for "${cleanQuery}".`;
    }
  } catch (error) {
    console.error("❌ IMDb fetch error:", error.message);
    return "Error fetching IMDb info.";
  }
}

// 💬 Chat Route using Gemini API
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  console.log("💬 Received message:", message);

  try {
    const imdbInfo = await getIMDbData(message);

    console.log("🚀 Calling Gemini API...");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


    const prompt = `You are a friendly movie assistant. Tell me about ${message} — include story, reviews, and fun facts.`;

    const result = await model.generateContent(prompt);
    const aiReply = result.response.text();

    console.log("✅ Gemini API success");
    res.json({ reply: `${imdbInfo}\n\n💬 AI Summary:\n${aiReply}` });
  } catch (err) {
    console.error("❌ Chat route error:", err.message);
    res.status(500).json({ reply: "Server error. Please try again later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
