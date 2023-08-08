import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import store from "../utils/store.js";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early Retrun
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-4">SubScription</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>GOM</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default SideBar;
