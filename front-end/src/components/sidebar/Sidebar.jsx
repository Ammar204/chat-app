import React from "react";
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import { OnlineFriendsContextProvider } from "../../context/onlineFriends.context.jsx";
const Sidebar = () => {
  return (
    <OnlineFriendsContextProvider>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        <div>
          <SearchInput />
        </div>

        <div
          className="divider px-3  bg-slate-600 "
          style={{ height: "1px", borderRadius: "1px", marginTop: "30px" }}
        ></div>

        <Conversations />

        <LogoutButton />
      </div>
    </OnlineFriendsContextProvider>
  );
};

export default Sidebar;
