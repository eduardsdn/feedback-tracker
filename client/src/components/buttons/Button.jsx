import React from "react";
import buttonsStyle from "../../styles/buttons.module.scss";
import plusIcon from "../../assets/shared/icon-plus.svg";

const Button = function ({ text, color, hasPlusIcon, type }) {
  let colorClass;

  switch (color) {
    case "purple":
      colorClass = buttonsStyle.purple;
      break;
    case "blue":
      colorClass = buttonsStyle.purple;
      break;
    case "black":
      colorClass = buttonsStyle.black;
      break;

    default:
      break;
  }

  return (
    <button
      className={`${buttonsStyle.btn} ${colorClass} ${buttonsStyle.addFeedbackBtn}`}
      type={type === "submit" ? "submit" : null}
    >
      {hasPlusIcon ? <img src={plusIcon} alt="" /> : null}
      {text}
    </button>
  );
};

export default Button;
