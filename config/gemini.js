// Import the Google Generative AI class from the package
// We use destructuring to get GoogleGenAI from @google/genai
const { GoogleGenAI } = require("@google/genai");
// Create an instance of the AI client
// We pass the API key for authentication
// process.env.GEMINI_API_KEY reads the key from environment variables (.env file)
// This keeps sensitive data secure (not hardcoded in code)

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// Export this AI instance so it can be used in other files
// This allows reusability across the entire project

module.exports = ai;
