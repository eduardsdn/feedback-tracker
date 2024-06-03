import React from "react";
import commentIcon from "../../assets/shared/icon-comments.svg";
import commentCounterStyle from "../../styles/commentCounter.module.scss";

const CommentCounter = function ({ numOfComments }) {
  return (
    <div className={commentCounterStyle.commentsCounter}>
      <img src={commentIcon} alt="" />
      <span className={commentCounterStyle.commentsAmount}>
        {numOfComments}
      </span>
    </div>
  );
};
export default CommentCounter;
