import React, { useState, useRef, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";

function InputForm({ onSendMessage, isLoading }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Focus input when loading state changes
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor="user-input" className="sr-only">
        Type your question
      </label>
      <input
        id="user-input"
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about Segment, mParticle, Lytics, or Zeotap..."
        aria-label="Your message"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        aria-label="Send message"
      >
        {isLoading ? <LoadingIndicator /> : "Send"}
      </button>
    </form>
  );
}

export default InputForm;
