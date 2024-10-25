import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { TbBackground } from "react-icons/tb";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relativeVideo, setRelativeVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56%)] mt-16">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc{100%-350px}] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[400px] w-[680px] md:h-[500px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
