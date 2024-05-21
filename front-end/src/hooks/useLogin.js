import React from "react";
import toast from "react-hot-toast";
import { json } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const login = async ({ username, password }) => {
    const success =  handleInputError(username,password)

    if(!success) {
        return
    }

    const res = await fetch("/api/auth/login", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
  };



  return {login}
};


export default useLogin;

const handleInputError = (username,password)=>{
    if(!username || !password){
        toast.error("invalid fields")
        return false
    }
    return true

}
