// Configuration file template
// 1. Copy this file and rename it to 'config.js'
// 2. Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual API key
// 3. Get your key from: https://makersuite.google.com/app/apikey

const CONFIG = {
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
    API_ENDPOINT: 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent',
    QUESTION_TEMPERATURE: 0.7,
    QUESTION_MAX_TOKENS: 256,
    ANSWER_TEMPERATURE: 0.7,
    ANSWER_MAX_TOKENS: 512
};
