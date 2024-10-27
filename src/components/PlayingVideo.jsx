import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56%)] mt-14">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc{100%-350px}] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[400px] w-[900px] md:h-[500px] ml-[-1px] mr-[-1px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div className="font-bold text-sm md:text-xl mt-6 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src={video?.author?.avatar?.[0]?.url}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center cursor-pointer">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className=" text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="mt-1 text-center bg-black px-4 pt-2 rounded-full text-white cursor-pointer hover:bg-zinc-800 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" cursor="pointer" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] mr-6">
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="w-[900px] px p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div>
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;

// className="flex flex-col px-60 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]"
