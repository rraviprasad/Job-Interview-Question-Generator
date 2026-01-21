# 🔑 API Key Setup Guide

## Getting Your Gemini API Key

Follow these steps to get your free Gemini API key and configure the application:

### Step 1: Get Your API Key

1. **Visit Google AI Studio**: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   
2. **Sign in** with your Google account

3. **Click "Create API Key"** button

4. **Copy the generated API key** (it will look like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

### Step 2: Configure the Application

1. **Open the file** `config.js` in your project folder

2. **Replace** `YOUR_GEMINI_API_KEY_HERE` with your actual API key:

```javascript
const CONFIG = {
    GEMINI_API_KEY: 'AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // ← Paste your key here
    // ... rest of the config
};
```

3. **Save the file**

### Step 3: Test the Application

1. Open `index.html` in your browser
2. Navigate to "Interview Prep"
3. Select a job category and experience level
4. Click "Generate Question"
5. If it works, you'll see a generated question!

---

## ⚠️ Important Security Notes

### ✅ DO:
- Keep your API key **private**
- Add `config.js` to `.gitignore` (already done)
- Never commit `config.js` to GitHub
- Use `config.example.js` as a template for other developers

### ❌ DON'T:
- Share your API key publicly
- Commit `config.js` to version control
- Use the same key across multiple projects (for tracking purposes)

---

## 🔧 Troubleshooting

### "Error: API key not valid"
- Check that you copied the entire API key
- Verify there are no extra spaces before/after the key
- Try generating a new API key

### "Failed to generate question"
- Check your internet connection
- Open browser console (F12) to see detailed error
- Verify the API key hasn't exceeded its quota

### "CONFIG is not defined"
- Make sure `config.js` is loaded before the page scripts
- Check that `config.js` exists in the same folder as `index.html`

### API Quota Exceeded
- Gemini API has a free tier with limited requests per minute
- Wait a few minutes and try again
- Consider upgrading to a paid plan for higher limits

---

## 📊 API Limits (Free Tier)

| Limit Type | Value |
|------------|-------|
| Requests per minute | 15 |
| Requests per day | 1,500 |
| Tokens per minute | 32,000 |

---

## 🚀 Next Steps

For production deployment, consider:
1. **Backend proxy** - Hide API key completely from client
2. **Rate limiting** - Prevent abuse
3. **Caching** - Reduce API calls
4. **User quotas** - Limit requests per user

---

## 📞 Need Help?

If you're still having issues:
1. Check the [Google AI Studio documentation](https://ai.google.dev/docs)
2. Verify your API key at [API Keys page](https://makersuite.google.com/app/apikey)
3. Open browser console (F12 → Console) to see error messages
