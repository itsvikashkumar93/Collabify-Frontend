import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../utils/axios";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
          console.log(err);
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
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form
          className="flex flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit}
        >
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

          <button
            className="px-5 py-2 mt-4 bg-blue-500 text-white rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="" onClick={handleGoogleSignup}>
        <img className="h-12" src="/signup_with_google.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
