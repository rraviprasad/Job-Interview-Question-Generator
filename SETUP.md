# Setup Instructions

## Setting up API Keys

1. **Copy the example configuration file:**
   ```bash
   cp app-settings.example.js app-settings.js
   ```

2. **Get your Groq API Key:**
   - Visit [console.groq.com](https://console.groq.com/keys)
   - Sign up or log in
   - Create a new API key
   - Copy the API key

3. **Add your API key to `app-settings.js`:**
   - Open `app-settings.js`
   - Replace `'YOUR_GROQ_API_KEY_HERE'` with your actual Groq API key
   - Save the file

4. **Important:** Never commit `app-settings.js` to the repository! It's already in `.gitignore` to protect your keys.

## Running the Application

Simply open `index.html` in your browser or deploy the site to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

The application will use Llama 3.3 via Groq Cloud to generate interview questions and answers.
