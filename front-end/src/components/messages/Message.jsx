import React from "react";

import {useAuthContext} from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utilis/ExtractTime";
const Message = ({message}) => {

  // console.log("messagecheck")

  const {authUser} = useAuthContext()
  // console.log("authuser",authUser)
  const {selectedConversation} = useConversation()
  const forme = authUser.id == message.senderId
  // console.log("check",authUser.id == message.senderId)
  // console.log("messageSenderId",message.senderId)
  // console.log("forme",forme)
  const chatClassName = forme ? "chat-end" : "chat-start"
  const chatBg = forme ? "bg-blue-500" : ""
  const formatedTime  = extractTime(message.createdAt)
  const profilePic =  forme ? authUser.profilePic : selectedConversation?.profilePic

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt=" user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBg}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white ">
        {formatedTime}

      </div>
    </div>
  );
};

export default Message;
