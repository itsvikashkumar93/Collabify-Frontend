import axios from "../../utils/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const bio = e.target.bio.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const profilePicture = e.target.profilePicture.files[0];
    // console.log(name, username, bio, email, password, phone, profilePicture);
    axios
      .post("/auth/signup", {
        name,
        username,
        bio,
        email,
        password,
        phone,
        // profilePicture,
      })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        //   console.log(err);
      });
  };
  const handleGoogleSignup = () => {
    try {
      window.location.href = "http://localhost:3000/api/auth/google";
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="h-[90vh] flex relative flex-col items-center justify-center gap-10">
      <div className="bg-gray-200 px-10 py-4 rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Signup</h1>
        <form
          className="flex flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 rounded-md w-64"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="p-2 rounded-md w-64"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <input
            className="p-2 rounded-md w-64"
            type="text"
            placeholder="Bio"
            name="bio"
            required
          />
          <input
            className="p-2 rounded-md w-64"
            type="text"
            placeholder="Phone"
            name="phone"
            required
          />
          <input
            className="p-2 rounded-md w-64"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="p-2 rounded-md w-64"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            className="p-2 rounded-md w-64 bg-white border-2 border-gray-300 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            type="file"
            name="profilePicture"
            accept="image/*"
          />
          <button
            className="px-5 py-2 mt-4 bg-blue-500 text-white rounded-md"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="" onClick={handleGoogleSignup}>
        <img className="h-12" src="/signup_with_google.png" alt="" />
      </div>
    </div>
  );
};

export default Signup;