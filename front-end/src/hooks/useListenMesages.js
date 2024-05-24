import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/chatSound.mp3"

const useListenMesages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;

      const sound = new Audio(notificationSound)
      sound.play()

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenMesages;
