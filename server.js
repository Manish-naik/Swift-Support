// server.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Chat endpoint
app.post("/api/chat", async (req, res) => {
	try {
		const userMessage = req.body.message;
		const clientId = req.body.clientId || "unknown";

		const apiKey = process.env.API_KEY;
		if (!apiKey) {
			return res.status(400).json({ reply: "Server missing API key. Set API_KEY in .env" });
		}

		// Google Generative Language API (Gemini) - generateContent
		const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				contents: [
					{ role: "user", parts: [{ text: userMessage }] }
				]
			})
		});

		const data = await response.json();

		// Extract text from candidates → content.parts[].text
		const parts = data?.candidates?.[0]?.content?.parts || [];
		const botReply = parts.map(p => p?.text || "").join("") || "Sorry, I couldn’t get a response.";

		res.json({ reply: botReply });

		// Async log after response
		queueMicrotask(() => {
			try {
				const fs = require("fs");
				const when = new Date().toISOString();
				const line = JSON.stringify({ when, clientId, user: userMessage, reply: botReply }) + "\n";
				fs.appendFile(path.join(__dirname, "chat.log"), line, () => {});
			} catch {}
		});
	} catch (error) {
		console.error("Error fetching AI response:", error);
		res.status(500).json({ reply: "Error: Could not reach AI service." });
	}
});

// Start server
app.listen(PORT, () => {
  const keyPreview = process.env.API_KEY ? `${process.env.API_KEY.slice(0, 6)}…` : "<missing>";
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`ENV check → API_KEY: ${keyPreview}`);
});
