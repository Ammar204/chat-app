import React, { useState } from "react";
import GenderRadioBtn from "./GenderRadioBtn";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
const SignUp = () => {
  const [selectGender, setSelectGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signup, loading } = useSignup();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const { fullName, username, password, confirmPassword } = e.target;
    const person = {
      fullName: fullName.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      gender: selectGender,
    };
    try {
      await signup(person);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          SignUp
          <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form onSubmit={SubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 bg-black text-white"
              name="fullName"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-black  text-white"
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

          <div className="relative">
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type={!showConfirmPassword ? "password" : "text"}
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-black  text-white"
              name="confirmPassword"
            ></input>
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 mt-10 hover:text-blue-500 text-white">
              {!showConfirmPassword ? (
                <IoMdEye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <IoMdEyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
          </div>
          <GenderRadioBtn
            selectGender={selectGender}
            setSelectGender={setSelectGender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block "
          >
            Already have an account ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2  bg-blue-500 text-white hover:bg-blue-600"
              type="Submit"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
