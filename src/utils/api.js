import axios from "axios";
import { CONFIG } from "../config.js";

// Debug what URLs we're actually using
console.log("API URL from config:", CONFIG.API_URL);

// Create axios instance with EXPLICIT OpenAI URL regardless of config
const api = axios.create({
  baseURL: "https://api.openai.com", // Hardcoded OpenAI base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONFIG.API_KEY}`,
  },
  timeout: 30000, // 30 second timeout
});

export const sendMessage = async (
  question,
  previousMessages = [],
  selectedDocs = []
) => {
  try {
    // Convert previous messages to the format expected by the API
    const formattedPrevMessages = previousMessages.map((msg) => ({
      role: msg.role === "bot" ? "assistant" : "user",
      content: msg.content,
    }));

    // Create a modified system message based on selected docs
    let systemMessage = CONFIG.SYSTEM_MESSAGE;

    if (selectedDocs.length < 4) {
      // If not all docs are selected, specify which ones to use
      const docNames = selectedDocs
        .map((doc) => doc.charAt(0).toUpperCase() + doc.slice(1))
        .join(", ");

      systemMessage += `\n\nFor this question, please ONLY use documentation from the following CDPs: ${docNames}. 
      Do not reference or provide information from other CDPs that are not in this list.`;
    }

    // Prepare the messages array with system message first
    const messages = [
      { role: "system", content: systemMessage },
      ...formattedPrevMessages,
      { role: "user", content: question },
    ];

    // EXPLICITLY use the full endpoint path
    const response = await api.post("/v1/chat/completions", {
      model: CONFIG.MODEL,
      messages: messages,
      temperature: CONFIG.TEMPERATURE,
      max_tokens: CONFIG.MAX_TOKENS,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("API Error:", error);

    // More detailed error logging
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    }

    throw error;
  }
};
