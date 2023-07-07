import React from "react";
import Profile from "./Profile.js";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileFun from "./Profile.js";
import ProfileClass from "./ProfileClass.js";
import useOnline from "../utils/useOnline.js";
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent-contructor");
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Namste React Op");
    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("commponents will unmount");
  }

  render() {
    console.log("parender- render");
    return (
      <div>
        <h1>About</h1>
        <Link to={"profile/123"}>AbhiProfile</Link>
        <h2>This is Namaste React Web Series</h2>
        {/* <Outlet /> */}
        {/* Lets pass prop to fun and class components */}
        <ProfileFun name="function components" />
        {/* <ProfileClass name="class components" id="first" /> */}
        {/* <ProfileClass name="class components" id="second" />
        <ProfileClass name="class components" id="third" />
        <ProfileClass name="class components" id="fourth" /> */}
      </div>
    );
  }
}
export default About;
