import React from "react";
import buttonsStyle from "../../styles/buttons.module.scss";
import plusIcon from "../../assets/shared/icon-plus.svg";

const Button = function ({ text, color, hasPlusIcon, type }) {
  let colorClass;

  switch (
    color //give className based on color prop
  ) {
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
      // based on type prop give type attribute
    >
      {hasPlusIcon ? <img src={plusIcon} alt="" /> : null}
      {/* based on hasPlusIcon prop redner icon inside a button  */}
      {text}
    </button>
  );
};

export default Button;
