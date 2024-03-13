import React from "react";
import upvoteStyle from "../styles/upvote.module.scss";

const Upvote = function () {
  return (
    <div className={upvoteStyle.upvote}>
      <div className={upvoteStyle.arrowUp}></div>

      {/* props here */}
      <p className={upvoteStyle.numOfUpvotes}>16</p>
    </div>
  );
};

export default Upvote;
