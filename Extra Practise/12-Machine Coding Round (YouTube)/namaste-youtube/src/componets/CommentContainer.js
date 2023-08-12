import React, { useState } from "react";
import CommensList from "./CommensList.js";
import { COMMENTS_DATA } from "../utils/contants.js";

const CommentContainer = () => {
  //   const [comment, setComments] = useState(COMMENTS_DATA);
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommensList comments={COMMENTS_DATA} />
    </div>
  );
};

export default CommentContainer;
