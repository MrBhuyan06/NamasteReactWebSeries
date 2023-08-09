import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants.js";
import VideoCard, { AddVideoCard } from "./VideoCard.js";
import { Link } from "react-router-dom";

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
      {videos[0] && <AddVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} className="key={video.id}">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
