import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors(
      fullName,
      username,
      password,
      confirmPassword,
      gender
    );

    if (!success) return;
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      }),
    });

    const data = await res.json();

    setLoading(false);
    if (!res.ok) {
      throw new Error(data.error);
    }
    localStorage.setItem("chat-user", JSON.stringify(data));
    setAuthUser(data);
  };

  return { loading, signup };
};
export default useSignup;

const handleInputErrors = (
  fullName,
  username,
  password,
  confirmPassword,
  gender
) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please input all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be atleast 6 charcters");
    return false;
  }

  return true;
};
