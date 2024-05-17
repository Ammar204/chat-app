import React from "react";
import { TiMessages } from "react-icons/ti";
const NoChatSelected = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2  ">
        <p>Hi! Ziyan Welcome to the Chat</p>
        <p>Select any chat to start the conversation </p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
