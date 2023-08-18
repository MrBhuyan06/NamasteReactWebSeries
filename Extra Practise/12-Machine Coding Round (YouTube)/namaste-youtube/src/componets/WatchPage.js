import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice.js";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer.js";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 flex flex-col ml-10">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="mt-5 min-h-[120px]">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
