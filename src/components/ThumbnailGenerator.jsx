import React, { useState } from "react";
import { generateThumbnail } from "../services/api";

function ThumbnailGenerator() {

  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);

    try {

      const response = await generateThumbnail(topic);

      setPrompt(response.prompt);

    } catch (error) {

      console.error(error);

      setPrompt("❌ Failed to generate thumbnail prompt.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="script-generator">

      <h2>🖼 AI Thumbnail Prompt Generator</h2>

      <input
        type="text"
        placeholder="Enter YouTube Topic..."
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
      />

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate Thumbnail Prompt"}
      </button>

      <textarea
        value={prompt}
        readOnly
        rows={10}
        placeholder="AI Thumbnail Prompt..."
      />

    </div>

  );

}

export default ThumbnailGenerator;