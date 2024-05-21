import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { BiSend } from "react-icons/bi";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
const Login = () => {
  const { login } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const person = {
      username: username.value,
      password: password.value,
    };
    console.log(person);
    try {
      await login(person);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login
          <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form onSubmit={submitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-black text-white"
              name="username"
            ></input>
          </div>

          <div className="relative">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-black  text-white"
              name="password"
            ></input>
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 mt-10 hover:text-blue-500 text-white">
              {!showPassword ? (
                <IoMdEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <IoMdEyeOff onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            {"Don't"} have an account ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2  bg-blue-500 text-white hover:bg-blue-600"
              type="Submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
