import React, { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import Sidebar from "./Sidebar";
import TextEditor from "./TextEditor";
import ActivityLog from "./ActivityLog";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("kanban");

  return (
    <div className="flex w-full overflow-hidden h-[92vh] flex gap-4 p-4">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />

      <div className="flex-1 w-[80%] rounded-md">
        {activeComponent === "kanban" && <KanbanBoard />}
        {activeComponent === "editor" && <TextEditor />}
        {activeComponent === "activity" && <ActivityLog />}
      </div>
    </div>
  );
};

export default Dashboard;
