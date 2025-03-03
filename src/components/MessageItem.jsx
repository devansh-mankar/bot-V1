import React from "react";

function MessageItem({ role, content }) {
  // Format the message content for structured display
  const formatMessage = (content) => {
    // Split by newlines
    const lines = content.split("\n");

    return lines.map((line, index) => {
      // Format numbered lists
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={index} className="list-item numbered">
            {line}
          </div>
        );
      }

      // Format bullet points
      if (/^•\s|^\*\s|^-\s/.test(line)) {
        return (
          <div key={index} className="list-item bulleted">
            {line}
          </div>
        );
      }

      // Format headings
      if (/^#{1,3}\s/.test(line)) {
        const level = line.match(/^(#{1,3})\s/)[1].length;
        const text = line.replace(/^#{1,3}\s/, "");
        return (
          <div key={index} className={`heading-${level}`}>
            {text}
          </div>
        );
      }

      // Regular paragraph
      if (line.trim() === "") {
        return (
          <div key={index} className="empty-line">
            &nbsp;
          </div>
        );
      }

      return (
        <div key={index} className="paragraph">
          {line}
        </div>
      );
    });
  };

  return (
    <div className={`message-item ${role}`}>
      <div className="message-avatar">{role === "user" ? "👤" : "🤖"}</div>
      <div className="message-content">{formatMessage(content)}</div>
    </div>
  );
}

export default MessageItem;
