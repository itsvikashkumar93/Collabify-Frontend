import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-center gap-20 items-center bg-gray-200">
      <h3 className="text-2xl font-bold">Collabify</h3>
      <div className="flex gap-10 bg-gray-200 p-2 rounded-md">
        <Link to="/">
          <h5 className="text-lg font-semibold">Home</h5>
        </Link>
        <Link to="/dashboard">
          <h5 className="text-lg font-semibold">Dashboard</h5>
        </Link>
        <Link to="/signup">
          <h5 className="text-lg font-semibold">Signup</h5>
        </Link>
        <Link to="/login">
          <h5 className="text-lg font-semibold">Login</h5>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
