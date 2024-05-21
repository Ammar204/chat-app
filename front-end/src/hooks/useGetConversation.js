import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        // console.log("data conversation",data)
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      }
      
    };
    getConversation();
  }, []);
  return { conversations };
};

export default useGetConversation;
