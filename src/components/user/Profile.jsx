import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    user && (
      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className="w-[50%] h-[80%] p-4">
          <h1 className="text-2xl font-semibold mb-4">Your Info</h1>
          <div className="shadow-md p-4 rounded-md bg-[#ffffff]">
            <img
              src={user.profilePicture ? user.profilePicture : "avatar.png"}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
            <hr className="my-3 border-gray-300" />
            <div className="flex justify-between items-center gap-2">
              <h5 className="">Full Name</h5>
              <h4 className="">{user.name}</h4>
              <Link to="/edit-profile" className="underline ">
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="shadow-md p-4 rounded-md mt-4 bg-[#ffffff]">
            <h5 className="font-semibold">Profile info</h5>
            <hr className="border-gray-300 my-3" />
            <div className="flex justify-between items-center gap-2">
              <h5 className="">Email</h5>
              <h4 className="">{user.email}</h4>
            </div>
            {user.phone && (
              <>
                <hr className="border-gray-300 my-3" />
                <div className="flex justify-between items-center gap-2">
                  <h5 className="">Phone Number</h5>
                  <h4 className="">{user.phone}</h4>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
