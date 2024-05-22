import React from "react";
import { BiSend } from "react-icons/bi";
import useSentMessage from "../../hooks/useSentMessage";
import toast from "react-hot-toast";
const MessageInput = () => {
  const { sentMessage } = useSentMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = e.target;

    if (!message.value) {
      return;
    }

    try {
      await sentMessage(message.value);
      message.value = ""
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form className=" px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          name="message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:text-blue-500"
        >
          <BiSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
