import React, { useEffect, useState } from "react";
import { useOnlineFriendsContext } from "../../context/onlineFriends.context";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchOnlineFriendByFullName, getOnlineFriends } =
    useOnlineFriendsContext();

  const searchUsers = (fullName) => {
    fullName ? searchOnlineFriendByFullName(fullName) : getOnlineFriends();
  };

  useEffect(() => {
    // console.log("inside use effect",inputValue)
    //a m m 
    // a m m am amm amma 
    const timeoutId = setTimeout(() => {
      searchUsers(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
    // return ()=> console.log("in return input value",inputValue)
  }, [inputValue]);

  return (
    <input
      type="text"
      placeholder="Search...."
      className="input input-bordered rounded-full "
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      name="search"
    ></input>
  );
};

export default SearchInput;
