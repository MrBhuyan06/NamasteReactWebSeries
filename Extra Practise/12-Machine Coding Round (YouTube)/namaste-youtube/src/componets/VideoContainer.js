import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants.js";
import VideoCard from "./VideoCard.js";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
