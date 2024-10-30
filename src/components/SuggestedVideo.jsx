import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Time from "../loader/Time";

const SuggestedVideo = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3">
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-36 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsCheckCircleFill className="text-[12px] lg:text-[10px] xl:text-[12px]  text-gray-600 ml-1" />
              )}
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SuggestedVideo;
