import React from "react";

const Comment = ({ data }) => {
  const { text, name } = data;
  return (
    <div className="flex gap-2 mb-2 bg-gray-400 w-80 items-center p-2 rounded-md">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt=""
      />
      <p>{name} :-</p>
      <span>{text}</span>
    </div>
  );
};

export default Comment;
