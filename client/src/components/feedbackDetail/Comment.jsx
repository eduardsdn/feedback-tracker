import React from "react";
import commentStyle from "../../styles/feedbackDetail/comment.module.scss";
import profileDefaultPicture from "../../assets/user-images/default.png";

const Comment = function ({ commentID, imageFileName, commentText, userRealName, userNickName }) {
  console.log(commentText);
  console.log(imageFileName);
  let imgSrc;
  try {
    imgSrc = require(`../../assets/user-images/${imageFileName}`);
  } catch {
    console.error("Could not load profile picture from comment ID", commentID);
    imgSrc = profileDefaultPicture;
  }

  return (
    <div className={commentStyle.comment}>
      <img className={commentStyle.profilePic} src={imgSrc} alt="" />
      <div className={commentStyle.content}>
        <div className={commentStyle.topContent}>
          <div className={commentStyle.userNameHolder}>
            <p className={commentStyle.userRealName}>{userRealName}</p>
            <p className={commentStyle.userNickName}>{"@" + userNickName}</p>
          </div>
          {/* <button className={commentStyle.replyBtn}>Reply</button> */}
        </div>
        <p className={commentStyle.text}>{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
