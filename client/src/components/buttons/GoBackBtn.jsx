import React from "react";
import { Link } from "react-router-dom";
import buttonsStyle from "../../styles/buttons.module.scss";
import iconArrowLeft from "../../assets/shared/icon-arrow-left.svg";

const GoBackBtn = function ({ route }) {
  return (
    <Link to={route} className={buttonsStyle.goBackLink}>
      <img src={iconArrowLeft} alt="" />
      <p className={buttonsStyle.linkText}>Go Back</p>
    </Link>
  );
};

export default GoBackBtn;
