import { useState } from "react";
import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/Dashboard";
import AIAssistant from "./components/assistant/AIAssistant";
import ScriptGenerator from "./components/youtube/ScriptGenerator";
import ThumbnailGenerator from "./components/youtube/ThumbnailGenerator";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "assistant":
        return <AIAssistant />;

      case "script":
        return <ScriptGenerator />;

      case "thumbnail":
        return <ThumbnailGenerator />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">

        <div className="top-bar">
          <h2>VK AI Studio</h2>
        </div>

        <div className="page-content">
          {renderPage()}
        </div>

      </div>

    </div>
  );
}

export default App;