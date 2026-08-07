import React from "react";

function Dashboard(){

    return(

        <div className="dashboard">

            <h1>🚀 VK AI Studio Dashboard</h1>

            <p>

            Welcome to your AI Content Creation Studio.

            </p>

            <div className="dashboard-grid">

                <div className="card">
                    🎬 Script Generator
                </div>

                <div className="card">
                    🖼 Thumbnail Generator
                </div>

                <div className="card">
                    🎤 Voice Generator
                </div>

                <div className="card">
                    📈 SEO Generator
                </div>

                <div className="card">
                    📺 YouTube Studio
                </div>

                <div className="card">
                    📊 Analytics
                </div>

            </div>

        </div>

    );

}

export default Dashboard;