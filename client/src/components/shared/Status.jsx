import React from "react";
import statusStyle from "../../styles/status.module.scss";

const Status = function ({ status, amount }) {
  const testid = `statusStyle.${status}}`;

  const getColorStatus = function (status) {
    switch (status) {
      case "planned":
        return statusStyle.planned;
      case "in-progress":
        return statusStyle.inProgress;
      case "live":
        return statusStyle.live;
      default:
        return statusStyle.planned;
    }
  };

  return (
    <div className={statusStyle.statusPreview}>
      <div className={statusStyle.left}>
        <div
          className={statusStyle.colorIndicator}
          id={getColorStatus(status)}
        ></div>
        <p className={statusStyle.name}>{status}</p>
      </div>
      {amount ? <p className={statusStyle.amount}>{amount}</p> : null}
    </div>
  );
};

export default Status;
