import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [conversations, setConversations] = useState([]);

  const getConversation = useCallback(async (queryParams = {}) => {
    let endpoint = "/api/users";

    if (Object.keys(queryParams).length > 0) {
      const searchParams = new URLSearchParams(queryParams);
      endpoint += `?${searchParams}`;
    }

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      // console.log("data conversation",data)
      setConversations(data);
    } catch (error) {
      toast.error(error.message);
    }
  });

  // useEffect(() => {
  //   getConversation();
  // }, []);

  return { conversations, getConversation };
};

export default useGetConversation;
