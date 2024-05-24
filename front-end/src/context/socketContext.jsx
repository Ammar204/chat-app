import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
    const socket = io("http://localhost:8000",{
        query:{
            userId : authUser.id
        }
      });

      socket.on("getOnlineUser",(users)=>{
        setOnlineFriends(users)
      })

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineFriends }}>
      {children}
    </SocketContext.Provider>
  );
};


export const useSocketContext = ()=>{
    return useContext(SocketContext)
}