import React from "react";
import { useOnlineFriendsContext } from "../../context/onlineFriends.context";

const SearchInput = () => {
  const { searchOnlineFriendByFullName, getOnlineFriends } =
    useOnlineFriendsContext();

  const handleChange = (e) => {
    const fullName = e.target.value;
    fullName ? searchOnlineFriendByFullName(fullName) : getOnlineFriends();
  };

  return (
    <input
      type="text"
      placeholder="Search...."
      className="input input-bordered rounded-full "
      onChange={(e) => handleChange(e)}
      name="search"
    ></input>
  );
};

export default SearchInput;
