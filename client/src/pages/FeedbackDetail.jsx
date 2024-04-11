import React from "react";
import feedbackDetailStyle from "../styles/feedbackDetail/feedbackDetail.module.scss";
import { useLocation } from "react-router-dom";
import GoBackBtn from "../components/buttons/GoBackBtn";
import Button from "../components/buttons/Button";
import SuggestionCard from "../components/shared/SuggestionCard";

const FeedbackDetail = function () {
  const location = useLocation();
  const feedbackInfo = location.state;

  return (
    <div className={feedbackDetailStyle.feedbackDetail}>
      <div className={feedbackDetailStyle.topButtons}>
        <GoBackBtn route="/" />
        <Button text="Edit Feedback" color="blue" />
      </div>
      <div className={feedbackDetailStyle.cardHolder}>
        <SuggestionCard {...feedbackInfo} />
      </div>

      <section className={feedbackDetailStyle.comments}></section>
    </div>
  );
};

export default FeedbackDetail;
