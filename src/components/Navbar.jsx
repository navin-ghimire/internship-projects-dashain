import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className=" flex items-center space-x-4">
        <AiOutlineMenu className="text-2xl cursor-pointer" />
        <ImYoutube2 className="w-[80px] h-[40px] cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
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
