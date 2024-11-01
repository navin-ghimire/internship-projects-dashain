import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className=" flex items-center space-x-4">
        <AiOutlineMenu className="text-2xl cursor-pointer" />
        <ImYoutube2 className="w-[80px] h-[40px] cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <CgProfile className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
