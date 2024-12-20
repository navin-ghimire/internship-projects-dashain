import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";

const Search = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    const fetchSearchData = async () => {
      fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
        console.log(contents);
        setResult(contents);
      });
    };
    fetchSearchData();
  }, [searchQuery]);

  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        <Sidebar />
        <div className="grow w-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className="grid grid-cols-1 gap-2 p-2">
            {result?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
