import React, { useState } from "react";
import vkAi from "../../assets/vk-ai.png";
import { chatAI } from "../../services/api";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hello Creator! 👋\nI'm your AI Assistant.\nHow can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const text = message.trim();

    if (!text || loading) {
      return;
    }

    // User message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: text,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const data = await chatAI(text);

      // Backend returns: { reply: "..." }
      const aiResponse =
        data?.reply ||
        data?.response ||
        data?.message ||
        data?.answer ||
        "No response received from VK AI.";

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: aiResponse,
        },
      ]);
    } catch (error) {
      console.error("VK AI Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "❌ Unable to connect to VK AI backend. Please make sure FastAPI and Ollama are running.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="assistant-panel">

      {/* LEFT */}
      <div className="assistant-left">

        <img
          src={vkAi}
          alt="VK AI Assistant"
          className="assistant-image"
        />

        <h2>VK AI</h2>

        <p className="status">
          🟢 ONLINE
        </p>

      </div>


      {/* RIGHT */}
      <div className="assistant-right">

        <h1>VK AI Assistant</h1>

        <p className="message">
          Your personal AI assistant for YouTube and content creation.
        </p>


        {/* CHAT */}
        <div className="chat-box">

          {messages.map((item, index) => (
            <div
              key={index}
              className={
                item.role === "user"
                  ? "chat-message user-message"
                  : "chat-message ai-message"
              }
            >

              <strong>
                {item.role === "user" ? "You" : "VK AI"}
              </strong>

              <p>{item.text}</p>

            </div>
          ))}


          {loading && (
            <div className="chat-message ai-message">

              <strong>VK AI</strong>

              <p>
                Thinking... 🤔
              </p>

            </div>
          )}

        </div>


        {/* INPUT */}
        <div className="chat-input-area">

          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask VK AI anything..."
            rows="2"
            disabled={loading}
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
          >
            {loading ? "Thinking..." : "Send 🚀"}
          </button>

        </div>


        {/* FEATURES */}
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