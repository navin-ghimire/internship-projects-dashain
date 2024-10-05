import React from "react";
import { GoFlame, GoHome, GoTrophy, GoVideo } from "react-icons/go";
import { SiReasonstudios, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";
import {
  MdHistory,
  MdOutlinedFlag,
  MdOutlineFeedback,
  MdOutlineHelpOutline,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";

import { PiPlaylistDuotone, PiThumbsUpLight } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { IoIosArrowForward, IoLogoYoutube } from "react-icons/io";
import { IoGameControllerOutline, IoMusicalNoteOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { LiaCopyrightSolid } from "react-icons/lia";

const Sidebar = () => {
  //array create
  //array vitra values add
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icons: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icons: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subcriptions",
      icons: <MdSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your channel",
      icons: <ImProfile />,
    },
    {
      id: 2,
      name: "History",
      icons: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icons: <PiPlaylistDuotone />,
    },
    {
      id: 4,
      name: "Your videos",
      icons: <GoVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icons: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icons: <PiThumbsUpLight />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icons: <GoFlame />,
    },
    {
      id: 2,
      name: "Music",
      icons: <IoMusicalNoteOutline />,
    },
    {
      id: 3,
      name: "Gaming",
      icons: <IoGameControllerOutline />,
    },
    {
      id: 4,
      name: "Sports",
      icons: <GoTrophy />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icons: <IoLogoYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icons: <SiReasonstudios />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icons: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "YouTube Kids",
      icons: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icons: <CiSettings />,
    },
    {
      id: 2,
      name: "Report history",
      icons: <MdOutlinedFlag />,
    },
    {
      id: 3,
      name: "Help",
      icons: <MdOutlineHelpOutline />,
    },
    {
      id: 4,
      name: "Send feedback",
      icons: <MdOutlineFeedback />,
    },
  ];
  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-hidden mt-20">
      {/* Home */}
      <div className="space-y-3 items-center">
        {/* array  maping */}
        {sidebarItems.map((items) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{items.icons}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className=" mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
          <h1 className="font-semibold">You</h1>
          <IoIosArrowForward />
        </div>
        {/* array  maping */}
        {sidebarItems2.map((items) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{items.icons}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* Explore */}
      <div className=" mt-4 space-y-3 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {/* array  maping */}
        {sidebarItems3.map((items) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{items.icons}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* more from youtube */}
      <div className=" mt-4 space-y-3 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">More From YouTube</h1>
        </div>
        {/* array  maping */}
        {sidebarItems4.map((items) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-500">{items.icons}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* setting */}
      <div className=" mt-4 space-y-3 items-center">
        {sidebarItems5.map((items) => {
          return (
            <div className=" flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{items.icons}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      <span className="text-xs font-semibold text-gray-500 cursor-pointer">
        About Press Copyright<br />
      Contact us Creators<br />
      Advertise Developers
      <br /><br />
      <p>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features</p>
      </span>
      <br />
      <p className="flex items-center text-xs text-gray-800 mt-1"><LiaCopyrightSolid /> 2024 Google LLC</p>
    </div>
  );
};

export default Sidebar;
