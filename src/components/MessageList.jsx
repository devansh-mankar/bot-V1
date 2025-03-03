import React from "react";
import MessageItem from "./MessageItem";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}

export default MessageList;
