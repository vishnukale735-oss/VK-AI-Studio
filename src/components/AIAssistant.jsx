import React from "react";
import aiImage from "../assets/vk-ai.png";

function AIAssistant() {
  return (
    <div className="assistant-panel">

      <div className="assistant-left">
        <img
          src={aiImage}
          alt="VK AI Assistant"
          className="assistant-image"
        />
      </div>

      <div className="assistant-right">

        <h1>VK AI Assistant</h1>

        <p className="status">
          🟢 ONLINE
        </p>

        <p className="message">
          Hello Creator! 👋
          <br /><br />
          I'm your AI Assistant.
          <br />
          Ready to help you create viral YouTube content.
        </p>

        <div className="feature-list">

          <div className="feature-card">
            🔥 Trending Topic
          </div>

          <div className="feature-card">
            🎬 Generate Script
          </div>

          <div className="feature-card">
            🎤 Create Voice
          </div>

          <div className="feature-card">
            🖼 Thumbnail Prompt
          </div>

          <div className="feature-card">
            🎥 Video Prompt
          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;