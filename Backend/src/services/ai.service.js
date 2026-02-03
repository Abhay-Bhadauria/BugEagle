const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // more stable on free tier
  systemInstruction: `
You are a senior software engineer and expert code reviewer.
Give concise, constructive, production-ready feedback.
`
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error("Empty response from Gemini");
    }

    return result.response.text();

  } catch (error) {
    console.error("Gemini Service Error:", error.message);

    // Prevent crash, return safe response
    return "⚠️ AI service is temporarily unavailable. Please try again later.";
  }
}

module.exports = generateContent;
