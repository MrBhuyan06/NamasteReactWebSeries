import React from "react";
import Comment from "./Comment.js";

const CommensList = ({ comments }) => {
  //   console.log(comments);
  return (
    <div>
      {comments.map((ele) => (
        <>
          <Comment key={ele.id} data={ele} />
          {/* //for the replies */}
          <div className="ml-12 border-l-2 border-red-300">
            {/* Recursion for the nested commensts */}
            <CommensList comments={ele.replies} />
          </div>
        </>
      ))}
    </div>
  );
};

export default CommensList;
// //  <div>
//             {/* Recursion for the nested commensts */}
//             <CommensList data={ele.replies} />
//           </div>
