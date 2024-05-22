import React from "react";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utilis/generateEmojie";
import {useOnlineFriendsContext} from '../../context/onlineFriends.context'
const Conversations = () => {

  const {onlineFriends} = useOnlineFriendsContext()

  return (
    <div className="py-1 flex flex-col overflow-auto ">
      {onlineFriends.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIdx={idx === onlineFriends.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
