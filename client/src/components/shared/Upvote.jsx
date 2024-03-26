import React from "react";
import upvoteStyle from "../../styles/upvote.module.scss";

const Upvote = function ({ upvotes }) {
  return (
    <div className={upvoteStyle.upvote}>
      <div className={upvoteStyle.arrowUp}></div>
      <p className={upvoteStyle.numOfUpvotes}>{upvotes}</p>
    </div>
  );
};

export default Upvote;
