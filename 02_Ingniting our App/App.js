/**
 *
 * <div id ="parent">
 *   <div id="child">
 *     <h1> iam h1 tag
 *     </h1>
 *    <h2> i am h2 tag</h2>
 * </div>
 * </div>
 *
 */
import React from "react";
import ReactDOM from "react-dom/client.js";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {
        style: {
          color: "red",
        },
      },
      "This is Namaste React🚀"
    ),
    React.createElement(
      "h1",
      {
        style: {
          color: "green",
        },
      },
      "I am h1 Tag"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      {
        style: {
          color: "orange",
        },
      },
      "I am h1 Tag"
    ),
    React.createElement(
      "h1",
      {
        style: {
          color: "brown",
        },
      },
      "I am h1 Tag"
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Using React"
);
// console.log(heading); //return object
console.log(parent); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
//render => convert the js object  => html element => Put in to the Dom
root.render(parent);
