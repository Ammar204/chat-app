import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utilis/generateEmojie";
const Conversations = () => {
  const { conversations } = useGetConversation();
  console.log("conversations", conversations);
  return (
    <div className="py-1 flex flex-col overflow-auto ">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {/* <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation /> */}
    </div>
  );
};

export default Conversations;
