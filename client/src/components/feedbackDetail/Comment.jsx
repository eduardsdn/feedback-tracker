import React from "react";
import commentStyle from "../../styles/feedbackDetail/comment.module.scss";
import profilePicture from "../../assets/user-images/image-anne.jpg";

const Comment = function ({ comment }) {
  console.log(comment);
  const commentText = comment.content;
  const userRealName = comment.user.name;
  const userNickName = comment.user.username;

  return (
    <div className={commentStyle.comment}>
      <img className={commentStyle.profilePic} src={profilePicture} alt="" />
      <div className={commentStyle.content}>
        <div className={commentStyle.topContent}>
          <div className={commentStyle.userNameHolder}>
            <p className={commentStyle.userRealName}>{userRealName}</p>
            <p className={commentStyle.userNickName}>{userNickName}</p>
          </div>
          <button className={commentStyle.replyBtn}>Reply</button>
        </div>
        <p className={commentStyle.text}>{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
