// Configuration file for API keys
// IMPORTANT: Add this file to .gitignore to keep your API key secure

const CONFIG = {
    // Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual Gemini API key
    // Get your key from: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyDMj8u72nlaQW8nlqnSas_uJkpsQF3qZb0',

    // API Configuration
    API_ENDPOINT: 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent',

    // Generation settings
    QUESTION_TEMPERATURE: 0.7,
    QUESTION_MAX_TOKENS: 256,
    ANSWER_TEMPERATURE: 0.7,
    ANSWER_MAX_TOKENS: 512
};
