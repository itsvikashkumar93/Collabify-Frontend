import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="h-screen flex relative flex-col items-center justify-center gap-10">
      <div className="w-[30%] bg-[#ffffff] shadow-md px-12 py-8 rounded-sm">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form
          className="flex flex-col items-start justify-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="border-b-[0.1vh] w-full border-zinc-400 outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="border-b-[0.1vh] w-full border-zinc-400 outline-none mt-3"
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <div className="mt-1">
            <span className="text-sm mr-1">No account?</span>
            <Link to="/signup">
              <span className="text-sm text-blue-600">Create one!</span>
            </Link>
          </div>

          <div className="w-full flex justify-end">
            <button
              className="px-5 py-1 mt-3 bg-blue-600 text-white rounded-sm"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="" onClick={handleGoogleSignup}>
        <img
          className="h-12 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
          src="/signup_with_google.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
