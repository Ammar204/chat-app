import React, { useEffect } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    // console.log("selectedcon",selectedConversation)

    const getMessages = async () => {
      const res = await fetch(`/api/messages/${selectedConversation._id}`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data);
      // console.log("data",data)
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages };
};

export default useGetMessage;
