import React from "react";
import axios from "axios";
import upvoteStyle from "../../styles/upvote.module.scss";

const Upvote = function ({ feedbackID, upvotes }) {
  const increaseUpvote = async function (feedbackID, upvotes) {
    console.log(feedbackID + "THIS COMES FROM UPVOTE CLICK");
    await axios.put(`http://localhost:5006/api/feedbacks/addUpvote`, {feedbackID: feedbackID, upvotes: upvotes});
  };

  return (
    <div className={upvoteStyle.upvote} onClick={() => increaseUpvote(feedbackID, upvotes)}>
      <div className={upvoteStyle.arrowUp}></div>
      <p className={upvoteStyle.numOfUpvotes}>{upvotes}</p>
    </div>
  );
};

export default Upvote;
