import React from "react";
import { Link } from "react-router-dom";
import GoBackBtn from "../buttons/GoBackBtn";
import Button from "../buttons/Button";
import roadmapTopPanelStyle from "../../styles/roadmap/roadmapTopPanel.module.scss";

const RoadmapTopPanel = function () {
  return (
    <div className={roadmapTopPanelStyle.roadmapTopPanel}>
      <div className={roadmapTopPanelStyle.left}>
        <GoBackBtn />
        <h1 className={roadmapTopPanelStyle.title}>Roadmap</h1>
      </div>

      <Link to="/addfeedback">
        <Button text="Add Feedback" color="purple" hasPlusIcon={true}></Button>{" "}
      </Link>
    </div>
  );
};

export default RoadmapTopPanel;
