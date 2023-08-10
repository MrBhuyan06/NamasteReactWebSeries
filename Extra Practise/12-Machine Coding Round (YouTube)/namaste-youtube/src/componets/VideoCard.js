import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 border-2 rounded-lg shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      {/* <img src={thumbnails.default} alt="" /> */}
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="underline">{channelTitle}</li>
        <li className="font-semibold">{statistics.viewCount} View</li>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border-2 border-red-200">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
