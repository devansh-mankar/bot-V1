import React from "react";
import ChatContainer from "./components/ChatContainer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>CDP Assistant</h1>
        <p>Ask questions about Segment, mParticle, Lytics, and Zeotap</p>
      </header>
      <main>
        <ChatContainer />
      </main>
      <footer className="app-footer">
        <p>© 2025 CDP Assistant</p>
      </footer>
    </div>
  );
}

export default App;
