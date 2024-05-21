import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";

const useLogout = () => {
    const { setAuthUser } = useAuthContext();
    const {setSelectedConversation} = useConversation()

  const logout = async () => {
    
    try {
      const res = await fetch("/api/auth/logout", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setSelectedConversation(null)
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {logout};
};

export default useLogout;
