import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AIAssistant from "./components/AIAssistant";
import ScriptGenerator from "./components/ScriptGenerator";

function App() {

  const [page, setPage] = useState("dashboard");

  return (

    <div className="app-container">

      {/* Left Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="main-content">

        <Dashboard />

        <AIAssistant />

        <ScriptGenerator />

      </div>

    </div>

  );

}

export default App;