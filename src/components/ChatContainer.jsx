import React, { useState, useRef, useEffect } from "react";
import MessageList from "./MessageList";
import InputForm from "./InputForm";
import { sendMessage } from "../utils/api";
import { processQuestion } from "../utils/questionProcessor";

function ChatContainer() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi, I can help with questions about Segment, mParticle, Lytics, and Zeotap CDPs. What would you like to know?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (role, content) => {
    setMessages((prevMessages) => [...prevMessages, { role, content }]);
  };

  const handleSendMessage = async (inputValue) => {
    if (!inputValue.trim() || loading) return;

    // Add user message to chat
    addMessage("user", inputValue);

    // Process the question
    const result = processQuestion(inputValue);

    if (!result.isValid) {
      addMessage("bot", result.message);
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      // Get previous messages to maintain context
      const contextMessages = messages.slice(-6); // Last 6 messages for context

      // Send to API
      const botResponse = await sendMessage(result.question, contextMessages);
      addMessage("bot", botResponse);
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage("bot", handleError(error));
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    const errorFallbacks = {
      network:
        "I'm having trouble connecting to my knowledge source. Please check your internet connection and try again.",
      api: "I encountered an issue processing your request. Let me try a different approach.",
      timeout:
        "Your request is taking longer than expected. For complex questions, try breaking it down into smaller parts.",
      default:
        "I apologize for the inconvenience. Could you rephrase your question?",
    };

    if (error.code === "ECONNABORTED") {
      return errorFallbacks.timeout;
    } else if (error.response && error.response.status >= 500) {
      return errorFallbacks.api;
    } else if (error.message.includes("Network Error")) {
      return errorFallbacks.network;
    }
    return errorFallbacks.default;
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <div ref={messagesEndRef} />
      <InputForm onSendMessage={handleSendMessage} isLoading={loading} />
    </div>
  );
}

export default ChatContainer;
