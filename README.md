# 🤖 AI Chatbot - Swift Support

An intelligent chatbot powered by Google's Gemini AI that helps users get instant answers to their questions. Built with Node.js and Express, it features a clean chat interface with smooth real-time messaging.

## ✨ Features

- **AI-Powered Responses**: Powered by Google's Gemini 1.5 Flash model
- **Real-time Chat**: Instant messaging with typing indicators
- **Modern UI**: Clean, responsive design with dark theme
- **Message History**: View and clear chat history
- **Environment Configuration**: Secure API key management
- **Logging**: Automatic chat logging for debugging

## 🚀 Live Demo

[Add your deployed link here once you deploy]

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI**: Google Generative Language API (Gemini)
- **Styling**: Custom CSS with modern design principles
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google AI API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_google_ai_api_key_here
   ```

4. **Get your Google AI API key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key to your `.env` file

5. **Start the server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
ai-chatbot/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling
│   └── script.js       # Frontend JavaScript
├── server.js           # Express server
├── package.json        # Dependencies
├── .env               # Environment variables (create this)
├── chat.log           # Chat history log
└── README.md          # This file
```

## 🔒 Environment Variables

Create a `.env` file with:
- `API_KEY`: Your Google AI API key

## 🎨 Features in Detail

### Chat Interface
- Clean, intuitive design with dark theme
- Real-time typing indicators
- Message history with clear functionality
- Responsive design for all devices

### AI Integration
- Powered by Google's Gemini 1.5 Flash
- Handles various types of queries
- Error handling for API failures
- Secure API key management

### Technical Features
- Express.js backend with RESTful API
- Static file serving
- JSON response handling
- Automatic chat logging
- Environment variable configuration

## 🚀 Deployment

### Option 1: Deploy to Railway
1. Push your code to GitHub
2. Connect your repository to [Railway](https://railway.app)
3. Add your `API_KEY` environment variable
4. Deploy!

### Option 2: Deploy to Render
1. Push your code to GitHub
2. Connect your repository to [Render](https://render.com)
3. Set up a Web Service
4. Add your `API_KEY` environment variable
5. Deploy!

### Option 3: Deploy to Heroku
1. Push your code to GitHub
2. Connect your repository to [Heroku](https://heroku.com)
3. Add your `API_KEY` environment variable
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Google AI for providing the Gemini API
- Express.js team for the excellent framework
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]

---

⭐ **Star this repository if you found it helpful!**
