import React from "react";
import titleStyle from "../styles/suggestions/title.module.scss";

const Title = function () {
  return (
    <div className={titleStyle.titleContainer}>
      <h1 className={titleStyle.heading}>Frontend Mentor</h1>
      <h2 className={titleStyle.underHeading}>Feedback Board</h2>
    </div>
  );
};

export default Title;
