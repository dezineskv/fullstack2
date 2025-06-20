import React, { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className=" relative w-[85%]">
      <input
        type="text"
        placeholder="Search..."
        className="search-box w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 p-4"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {/* <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        onClick={handleSearchClick}
      >  <AiOutlineSearch /> 
      </button>*/}
    </div>
  );
};

export default SearchBox;
