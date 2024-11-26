import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Signup from "../components/user/Signup";
import Login from "../components/user/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/user/Profile";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routing;
