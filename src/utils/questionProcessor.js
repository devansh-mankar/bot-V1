import { CONFIG } from "../config";

export const processQuestion = (question) => {
  // Convert to lowercase for case-insensitive matching
  const lowerQuestion = question.toLowerCase();

  // Check if the question is relevant to CDPs
  const isCdpRelated = CONFIG.CDP_KEYWORDS.some((keyword) =>
    lowerQuestion.includes(keyword.toLowerCase())
  );

  const isHowToQuestion =
    lowerQuestion.includes("how to") ||
    lowerQuestion.includes("how do i") ||
    lowerQuestion.includes("how can i") ||
    lowerQuestion.includes("steps to") ||
    lowerQuestion.includes("guide for");

  // If it's a very short question, we might not be able to determine relevance
  const isTooShort = question.trim().split(/\s+/).length < 3;

  // Checking for irrelevant questions
  if (!isCdpRelated && !isHowToQuestion && !isTooShort) {
    return {
      isValid: false,
      message:
        "I'm specialized in answering questions about Segment, mParticle, Lytics, and Zeotap. Could you ask something related to these CDPs?",
    };
  }

  // For very long questions, we'll accept them as long as they contain CDP keywords
  const isVeryLong = question.length > 500;
  if (isVeryLong && !isCdpRelated) {
    return {
      isValid: false,
      message:
        "Your question seems quite detailed, but I don't see a clear connection to Segment, mParticle, Lytics, or Zeotap. Could you rephrase it to focus on these CDPs?",
    };
  }

  return {
    isValid: true,
    question,
  };
};
