# 🎯 PrepMaster - AI Job Interview Question Generator

<img width="1916" height="916" alt="PrepMaster Application Screenshot" src="https://github.com/user-attachments/assets/d4269f3e-5cd3-4294-abe5-015a04df1db9" />

## 📖 About

**PrepMaster** is an AI-powered interview preparation tool that helps job seekers practice for their next interview. Built with vanilla HTML, CSS, and JavaScript, it leverages Google's Gemini API to generate personalized interview questions and model answers tailored to specific job roles and experience levels.

**Project Timeline:** January 2025 - February 2025

## ✨ Features

- 🤖 **AI-Powered Questions**: Generate realistic interview questions using Google Gemini API
- 📚 **25+ Job Categories**: Software Engineer, Data Scientist, Product Manager, UI/UX Designer, and more
- 📊 **4 Experience Levels**: Beginner, Intermediate, Advanced, Professional
- 💡 **Model Answers**: Get comprehensive, professional answers to help structure your responses
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 🔐 **User Authentication**: Login/Register system to protect the interview dashboard
- 🎯 **Color-Coded Difficulty**: Visual indicators for question difficulty levels

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Pure JS, no frameworks
- **Google Gemini API** - AI-powered question and answer generation
- **LocalStorage** - Client-side authentication and data persistence

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Job-Interview-Question-Generator.git
   cd Job-Interview-Question-Generator
   ```

2. **Configure your API key**
   - Open `config.js`
   - Replace `YOUR_GEMINI_API_KEY_HERE` with your actual Gemini API key
   - See [API_SETUP.md](API_SETUP.md) for detailed instructions

3. **Run the application**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

4. **Start practicing!**
   - Register for an account
   - Navigate to "Interview Prep"
   - Select your job category and experience level
   - Generate questions and practice your answers

## 📁 Project Structure

```
Job-Interview-Question-Generator/
├── index.html              # Landing page
├── job-interview.html      # Interview dashboard (main app)
├── login.html             # Login page
├── register.html          # Registration page
├── about.html             # About page
├── contact.html           # Contact page
├── styles.css             # Global styles
├── auth.js                # Authentication logic
├── config.js              # API configuration (add to .gitignore!)
├── config.example.js      # Config template
├── .gitignore            # Git ignore rules
├── API_SETUP.md          # Detailed API setup guide
└── README.md             # This file
```

## 🔑 API Configuration

**Important:** Never commit `config.js` with your real API key!

1. The `config.js` file is already in `.gitignore`
2. Use `config.example.js` as a template
3. Get your free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
4. See [API_SETUP.md](API_SETUP.md) for troubleshooting

## 📸 Screenshots

![Home Page](Screenshot%20(199).png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Known Limitations

- **Client-side authentication**: Passwords stored in LocalStorage (not production-ready)
- **API key exposure**: Currently client-side (consider backend proxy for production)
- **No question history**: Questions are not saved
- **Mobile navigation**: Nav menu hidden on mobile devices

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Ravi Prasad**

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Google Fonts for the Outfit typeface
- All contributors and users of this project
