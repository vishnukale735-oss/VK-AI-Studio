import React from "react";

function Dashboard() {
  return (
    <div>

      <h1 style={{ marginBottom: "25px" }}>
        👋 Welcome to VK AI Studio
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >

        <div className="card">
          <h2>🤖 AI Assistant</h2>
          <p>
            Your personal AI assistant for content creation.
          </p>
        </div>

        <div className="card">
          <h2>📝 Script Generator</h2>
          <p>
            Generate professional YouTube scripts using AI.
          </p>
        </div>

        <div className="card">
          <h2>🖼 Thumbnail Generator</h2>
          <p>
            Generate powerful AI thumbnail prompts.
          </p>
        </div>

        <div className="card">
          <h2>📊 Analytics</h2>
          <p>
            Track your content performance.
          </p>
        </div>

        <div className="card">
          <h2>📱 Social Media</h2>
          <p>
            Manage your social media content.
          </p>
        </div>

        <div className="card">
          <h2>⚙ Settings</h2>
          <p>
            Manage VK AI Studio settings.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;