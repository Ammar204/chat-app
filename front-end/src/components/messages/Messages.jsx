import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import useListenMesages from "../../hooks/useListenMesages";
const Messages = () => {
  const { messages } = useGetMessage();

  useListenMesages();
  const lastMessageaRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageaRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  console.log("messages", messages);
  return (
    <div className="p-4 flex-1 overflow-auto">
      {messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageaRef}>
              <Message message={message} />;
            </div>
          );
        })}
      {messages.length === 0 && (
        <p className="text-center text-white">
          Send message to start conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
