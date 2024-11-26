import React from "react";

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  return (
    <div className="bg-zinc-800 text-white w-[20%] h-full p-4 rounded-md">
      <h2 className="text-xl font-bold mb-6">Collabify</h2>
      <nav>
        <button
          onClick={() => setActiveComponent("kanban")}
          className={`block text-left w-full px-4 py-2 mb-2 rounded hover:bg-zinc-700 ${activeComponent === "kanban" ? "bg-zinc-700" : "bg-zinc-600"}`}
        >
          Kanban Board
        </button>
        <button
          onClick={() => setActiveComponent("editor")}
          className={`block text-left w-full px-4 py-2 mb-2 rounded hover:bg-zinc-700 ${activeComponent === "editor" ? "bg-zinc-700" : "bg-zinc-600"}`}
        >
          Text Editor
        </button>
        <button
          onClick={() => setActiveComponent("activity")}
          className={`block text-left w-full px-4 py-2 mb-2 rounded hover:bg-zinc-700 ${activeComponent === "activity" ? "bg-zinc-700" : "bg-zinc-600"}`}
        >
          Activity Log
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
