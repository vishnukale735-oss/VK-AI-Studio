const API_URL = "http://127.0.0.1:8000";


// ===============================
// AI CHAT
// ===============================

export async function chatAI(message) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  if (!response.ok) {
    throw new Error("Chat request failed");
  }

  return await response.json();
}


// ===============================
// SCRIPT GENERATOR
// ===============================

export async function generateScript(topic) {
  const response = await fetch(`${API_URL}/script`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: topic,
    }),
  });

  if (!response.ok) {
    throw new Error("Script generation failed");
  }

  return await response.json();
}


// ===============================
// THUMBNAIL GENERATOR
// ===============================

export async function generateThumbnail(topic) {
  const response = await fetch(`${API_URL}/thumbnail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: topic,
    }),
  });

  if (!response.ok) {
    throw new Error("Thumbnail generation failed");
  }

  return await response.json();
}