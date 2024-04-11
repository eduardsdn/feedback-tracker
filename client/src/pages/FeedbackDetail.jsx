import React from "react";
import feedbackDetailStyle from "../styles/feedbackDetail/feedbackDetail.module.scss";
import { useParams } from "react-router-dom";
import GoBackBtn from "../components/buttons/GoBackBtn";
import Button from "../components/buttons/Button";
import SuggestionCard from "../components/shared/SuggestionCard";

const FeedbackDetail = function () {
  const { feedbackID } = useParams();

  console.log(feedbackID);

  return (
    <div className={feedbackDetailStyle.feedbackDetail}>
      <div className={feedbackDetailStyle.topButtons}>
        <GoBackBtn route="/" />
        <Button text="Edit Feedback" color="blue" />
      </div>
    </div>
  );
};

export default FeedbackDetail;
