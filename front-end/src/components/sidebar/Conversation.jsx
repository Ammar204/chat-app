import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineFriends}  = useSocketContext()
  const isSelected = selectedConversation?._id === conversation._id;

  const isOnline  = onlineFriends.includes(conversation._id)

  return (
    <>
      <div
        className={`flex gap-2 rounded hover:bg-blue-500 p-2 py-1 cursor-pointer items-center ${
          isSelected && "bg-blue-500" 
        }`}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline? "online" : ""}`}>
          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt=" user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="text-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
