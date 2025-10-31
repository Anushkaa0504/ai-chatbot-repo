# 🎬 AI Movie Chatbot

An intelligent movie assistant that gives you IMDb-based details (like genre, plot, and ratings) and AI-generated summaries, reviews, and highlights — all in one chat interface.

---

## 🚀 Features

✅ Fetches movie details (title, genre, IMDb rating, plot) via the **OMDb API**  
✅ Generates AI-powered summaries using **Google Gemini / OpenAI / Hugging Face**  
✅ Simple and elegant chat UI built with **React + Vite**  
✅ Backend powered by **Express.js + Node.js**  
✅ Supports **CORS**, **dotenv**, and **Axios** for clean API integration  
✅ Free deployment ready on **Render (backend)** and **Vercel (frontend)**  

---

## 🧩 Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Frontend** | React, Vite, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **AI Models** | Google Gemini / OpenAI GPT / Hugging Face models |
| **Database (optional)** | MongoDB |
| **APIs Used** | [OMDb API](https://www.omdbapi.com) for movie info |
| **Hosting** | Render (backend), Vercel (frontend) |

---

## 📁 Project Structure

ai-chatbot/
├── backend/
│ ├── server.js # Express server + API routes
│ ├── package.json
│ ├── .env # Environment variables (not committed)
│ └── node_modules/
│
└── frontend/
├── src/
│ ├── components/ # Chat UI components
│ ├── App.jsx
│ ├── main.jsx
│ └── styles/
├── package.json
├── vite.config.js
└── public/

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder with:

```bash
PORT=5000
OMDB_API_KEY=your_omdb_api_key
GEMINI_API_KEY=your_gemini_or_openai_api_key
📝 Get your OMDb API key from https://www.omdbapi.com/apikey.aspx
📝 Get your Gemini key from https://aistudio.google.com/app/apikey
📝 (Optional) You can also use Hugging Face or OpenAI keys instead.

🖥️ Run Locally
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/Anushkaa0504/ai-chatbot-repo.git
cd ai-chatbot-repo
2️⃣ Install dependencies
bash
Copy code
cd backend
npm install
3️⃣ Start the backend
bash
Copy code
npm run dev
4️⃣ Run the frontend
In a new terminal:

bash
Copy code
cd frontend
npm install
npm run dev
Your app will be live at 👉 http://localhost:5173

🌐 Deployment
🚀 Backend (Render)
Go to https://render.com

Create a New Web Service

Connect your GitHub repo

Set:

Root Directory → backend

Build Command → npm install

Start Command → npm start

Add .env keys

Deploy and copy your backend URL (e.g. https://ai-chatbot-backend.onrender.com)

🚀 Frontend (Vercel)
Go to https://vercel.com

Import your GitHub repo

Set:

Root Directory → frontend

Build Command → npm run build

Output Directory → dist

Add environment variable:

ini
Copy code
VITE_BACKEND_URL=https://ai-chatbot-backend.onrender.com
Deploy 🎉

💬 Example Usage
Input:

vbnet
Copy code
Tell me about Inception
Output:

vbnet
Copy code
🎬 Inception (2010)
Genre: Action, Sci-Fi, Thriller
IMDb Rating: ⭐ 8.8/10
Plot: A skilled thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal record.

💬 AI Summary:
A mind-bending thriller directed by Christopher Nolan that explores the power of dreams and reality through stunning visuals and an emotional storyline.
⚠️ Common Issues
Issue	Solution
Server Error	Ensure your .env keys are correct and backend is running
CORS Error	Check backend CORS origin (http://localhost:5173 for local dev)
Quota exceeded	Switch from OpenAI to Gemini (free)
Not Found on Gemini	Ensure you use gemini-1.5-flash-latest model

🧠 Future Enhancements
Add movie recommendations based on genres

Add sentiment analysis for movie reviews

Integrate YouTube trailers

Save user chat history

👩‍💻 Author
Anushka Rakesh
🎓 B.E. CSE (AI & ML) — Chandigarh University
💼 Passionate about AI, Web Development, and Creative Tech
🌐 GitHub: Anushkaa0504

⭐ If you like this project, give it a star on GitHub!

yaml
Copy code

---

Would you like me to make a **“badged” version** (with shields like `![Node.js](...)`, `![Express](...)`, `![Render Deploy](...)` on top)? It looks super professional for resumes and recruiters.






