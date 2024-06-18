import React from "react";
import feedbackDetailStyle from "../styles/feedbackDetail/feedbackDetail.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import GoBackBtn from "../components/buttons/GoBackBtn";
import Button from "../components/buttons/Button";
import SuggestionCard from "../components/shared/SuggestionCard";
import Comment from "../components/feedbackDetail/Comment";

const FeedbackDetail = function () {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.comments);
  const feedbackInfo = location.state;
  const comments = feedbackInfo.comments;
  const numOfComments = feedbackInfo.comments.length;
  const handleNavigate = function () {
    navigate("/editfeedback", { state: { ...feedbackInfo } });
  };

  return (
    <div className={feedbackDetailStyle.feedbackDetail}>
      <div className={feedbackDetailStyle.topButtons}>
        <GoBackBtn route="/" />
        {/* <Link to={{ pathname: "/editfeedback", state: { message: "test" } }}>
          <Button text="Edit Feedback" color="blue" />
        </Link> */}
        {/* STUPID BELOW */}
        <div onClick={() => handleNavigate()}>
          <Button text="Edit Feedback" color="blue" />
        </div>
      </div>
      <div className={feedbackDetailStyle.cardHolder}>
        <SuggestionCard {...feedbackInfo} />
        <section className={feedbackDetailStyle.comments}>
          <div className={feedbackDetailStyle.commentsIndicator}>
            <span className={feedbackDetailStyle.numOfComments}>{numOfComments}</span>
            <h2 className={feedbackDetailStyle.commentsTitle}>Comments</h2>
          </div>
          {comments.map((comment) => (
            <Comment
              commentID={comment.id}
              imageFileName={comment.user.image}
              commentText={comment.content}
              userRealName={comment.user.name}
              userNickName={comment.user.username}
            />
          ))}
          {/* <Comment comment={feedbackInfo.comments} /> */}
        </section>
      </div>
    </div>
  );
};

export default FeedbackDetail;
