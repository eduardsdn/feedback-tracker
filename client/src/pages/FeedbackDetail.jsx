import React from "react";
import feedbackDetailStyle from "../styles/feedbackDetail/feedbackDetail.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import GoBackBtn from "../components/buttons/GoBackBtn";
import Button from "../components/buttons/Button";
import SuggestionCard from "../components/shared/SuggestionCard";

const FeedbackDetail = function () {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);
  const feedbackInfo = location.state;

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
      </div>

      <section className={feedbackDetailStyle.comments}></section>
    </div>
  );
};

export default FeedbackDetail;
