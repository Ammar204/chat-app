import { createContext, useContext, useEffect, useState, useCallback } from "react";

export const OnlineFriendsContext = createContext();

export const useOnlineFriendsContext = () => {
  return useContext(OnlineFriendsContext);
};
export const OnlineFriendsContextProvider = ({ children }) => {
  const [onlineFriends, setOnlineFriends] = useState([]);

  const getOnlineFriends = useCallback(async (queryParams = {}) => {
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
      setOnlineFriends(data);
    } catch (error) {
      toast.error(error.message);
    }
  });

  useEffect(() => {
    getOnlineFriends();
  }, []);

  const searchOnlineFriendByFullName = (fullName) => {
    getOnlineFriends({
      fullName,
    });
  };

  return (
    <OnlineFriendsContext.Provider
      value={{getOnlineFriends, searchOnlineFriendByFullName, onlineFriends }}
    >
      {children}
    </OnlineFriendsContext.Provider>
  );
};
