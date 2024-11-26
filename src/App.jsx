import React from "react";
import Navbar from "./components/home/Navbar";
import Routing from "./utils/Routing";
import axios from "./utils/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const App = () => {
  const navigate = useNavigate();
  const connectToBackend = async () => {
    const response = await axios.get("/");
    console.log(response);
  };
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      toast.success("Login successful");
      localStorage.setItem("token", token);
      navigate("/");
    }
    // connectToBackend();
  }, []);
  return (
    <div className="bg-[#F2F2F2]">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
