export const CONFIG = {
  // Use Vite environment variables for sensitive data
  // Note: In Vite, environment variables need to be prefixed with VITE_

  API_KEY: import.meta.env.VITE_API_KEY,
  API_URL: import.meta.env.VITE_API_URL,

  // Non-sensitive configuration remains in the code
  MODEL: "gpt-4", // or your preferred model
  TEMPERATURE: 0.7,
  MAX_TOKENS: 1000,

  // System message for setting context
  SYSTEM_MESSAGE: `You are a CDP expert assistant that specializes in Segment, mParticle, Lytics, and Zeotap.
        
        Documentation sources:
        - Segment Documentation: https://segment.com/docs/?ref=nav
        - mParticle Documentation: https://docs.mparticle.com/
        - Lytics Documentation: https://docs.lytics.com/
        - Zeotap Documentation: https://docs.zeotap.com/home/en-us/
        
        When answering questions:
        1. Clearly state which CDP your answer relates to
        2. Provide step-by-step instructions when explaining how to do something
        3. Use bullet points or numbered lists for clarity
        4. If the question is about comparing CDPs, structure your answer to show the differences
        5. Only answer questions related to these CDPs and politely decline other questions
        6. If you don't know the answer, say so rather than making up information`,

  // Keywords for identifying CDP-related questions
  CDP_KEYWORDS: [
    "segment",
    "mparticle",
    "lytics",
    "zeotap",
    "cdp",
    "customer data platform",
    "data platform",
    "integration",
    "source",
    "destination",
    "audience",
    "profile",
    "tracking",
    "event",
    "identity",
    "user",
    "attribution",
  ],

  // Documentation URLs
  DOC_URLS: {
    segment: "https://segment.com/docs/?ref=nav",
    mparticle: "https://docs.mparticle.com/",
    lytics: "https://docs.lytics.com/",
    zeotap: "https://docs.zeotap.com/home/en-us/",
  },
};
