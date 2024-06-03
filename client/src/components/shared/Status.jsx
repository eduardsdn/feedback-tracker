import React from "react";
import statusStyle from "../../styles/status.module.scss";

const Status = function ({ status, amount }) {
  const testid = `statusStyle.${status}}`;

  const getColorStatus = function () {
    switch (status) {
      case "Planned":
        return statusStyle.planned;
      case "In Progress":
        return statusStyle.inProgress;
      case "Live":
        return statusStyle.live;
      default:
        return statusStyle.inProgress;
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
