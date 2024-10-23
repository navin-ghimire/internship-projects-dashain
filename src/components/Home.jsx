import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";

const Home = () => {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {data?.map((item) => {
          if (item.type !== "video") return null;
          return <Video key={item.id} video={item?.video} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default Home;