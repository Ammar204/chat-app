import React from "react";
import useConversation from "../zustand/useConversation";

const useSentMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();

  const sentMessage = async (message) => {
    const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    setMessages([...messages, data]);
  };
  return {sentMessage}
};

export default useSentMessage;
