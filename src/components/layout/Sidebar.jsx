function Sidebar({ activePage, setActivePage }) {

  const menu = [
    { id: "dashboard", name: "🏠 Dashboard" },
    { id: "assistant", name: "🤖 AI Assistant" },
    { id: "script", name: "📝 Script Generator" },
    { id: "thumbnail", name: "🖼 Thumbnail Generator" },
    { id: "analytics", name: "📊 Analytics" },
    { id: "social", name: "📱 Social Media" },
    { id: "settings", name: "⚙ Settings" }
  ];

  return (
    <div className="sidebar">

      <div className="logo">

        🔥 VK AI Studio

      </div>

      <div className="menu">

        {menu.map((item) => (

          <button
            key={item.id}
            className={
              activePage === item.id
                ? "menu-btn active"
                : "menu-btn"
            }
            onClick={() => setActivePage(item.id)}
          >
            {item.name}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;