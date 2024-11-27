import React, { useEffect, useState } from "react";
import KanbanBoard from "./KanbanBoard";
import Sidebar from "./Sidebar";
import TextEditor from "./TextEditor";
import ActivityLog from "./ActivityLog";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("kanban");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex w-full overflow-hidden h-[92vh] flex gap-4 p-4">
        <Sidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />

        <div className="flex-1 w-[80%] rounded-md">
          {activeComponent === "kanban" && <KanbanBoard />}
          {activeComponent === "editor" && <TextEditor />}
          {activeComponent === "activity" && <ActivityLog />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
