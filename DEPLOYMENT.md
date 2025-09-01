# Deployment Guide

This guide will help you deploy your AI Chatbot to various platforms.

## 🚀 Quick Deploy Options

### 1. Railway (Recommended - Free Tier Available)

1. **Push your code to GitHub**
2. **Go to [Railway](https://railway.app)**
3. **Connect your GitHub account**
4. **Click "New Project" → "Deploy from GitHub repo"**
5. **Select your `ai-chatbot` repository**
6. **Add Environment Variable:**
   - Key: `API_KEY`
   - Value: Your Google AI API key
7. **Deploy!** Your app will be live at `https://your-app-name.railway.app`

### 2. Render (Free Tier Available)

1. **Push your code to GitHub**
2. **Go to [Render](https://render.com)**
3. **Click "New" → "Web Service"**
4. **Connect your GitHub repository**
5. **Configure:**
   - Name: `ai-chatbot`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. **Add Environment Variable:**
   - Key: `API_KEY`
   - Value: Your Google AI API key
7. **Deploy!**

### 3. Heroku (Paid - But Reliable)

1. **Install Heroku CLI**
2. **Login: `heroku login`**
3. **Create app: `heroku create your-app-name`**
4. **Set environment variable:**
   ```bash
   heroku config:set API_KEY=your_google_ai_api_key
   ```
5. **Deploy: `git push heroku main`**

## 🔧 Environment Setup

### Get Google AI API Key

1. **Visit [Google AI Studio](https://makersuite.google.com/app/apikey)**
2. **Sign in with your Google account**
3. **Click "Create API Key"**
4. **Copy the generated key**
5. **Add it to your deployment platform's environment variables**

### Local Testing

1. **Create `.env` file:**
   ```env
   API_KEY=your_google_ai_api_key_here
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start server:**
   ```bash
   npm start
   ```

4. **Open: `http://localhost:3000`**

## 📝 Important Notes

- **Never commit your `.env` file** (it's in `.gitignore`)
- **Always set environment variables** in your deployment platform
- **Test locally first** before deploying
- **Monitor your API usage** to avoid unexpected charges

## 🆘 Troubleshooting

### Common Issues:

1. **"Server missing API key"**
   - Make sure `API_KEY` is set in your deployment platform

2. **"Could not reach AI service"**
   - Check your internet connection
   - Verify your API key is valid
   - Check Google AI service status

3. **App won't start**
   - Ensure Node.js version is 14+ (`engines` field in package.json)
   - Check all dependencies are installed

## 🌐 Custom Domain (Optional)

After deployment, you can:
1. **Add a custom domain** in your deployment platform
2. **Update the README.md** with your live URL
3. **Share your project** with the world!

---

**Need help?** Open an issue on GitHub or check the platform's documentation.
