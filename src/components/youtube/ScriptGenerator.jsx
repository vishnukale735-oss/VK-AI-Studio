import React, { useState } from "react";
import axios from "axios";

function ScriptGenerator() {

  const [topic, setTopic] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {

    if (!topic.trim()) {
      alert("Please enter a YouTube topic.");
      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/script",
        {
          topic: topic
        }
      );

      setScript(response.data.script);

    } catch (error) {

      console.error(error);

      setScript("❌ Failed to generate script.");

    }

    setLoading(false);

  };

  return (

    <div className="script-generator">

      <h2>🎬 YouTube Script Generator</h2>

      <input
        type="text"
        placeholder="Enter YouTube Topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateScript}>
        {loading ? "Generating..." : "Generate Script"}
      </button>

      <textarea
        rows="12"
        value={script}
        readOnly
        placeholder="Your AI generated script will appear here..."
      />

    </div>

  );

}

export default ScriptGenerator;