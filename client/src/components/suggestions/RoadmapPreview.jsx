import React from "react";
import Status from "../shared/Status";
import roadmapPreviewStyle from "../../styles/suggestions/roadmapPreview.module.scss";
import { Link, useNavigate } from "react-router-dom";

const RoadmapPreview = function () {
  // MAP ROADMAP PREVIEWS!!!
  const navigate = useNavigate();
  return (
    <div className={roadmapPreviewStyle.roadmapPreview}>
      <div className={roadmapPreviewStyle.top}>
        <h3 className={roadmapPreviewStyle.heading}>Roadmap</h3>
        <div
          onClick={() => navigate("/roadmap")}
          className={roadmapPreviewStyle.viewLink}
        >
          View
        </div>
      </div>

      <div className={roadmapPreviewStyle.statusPreviews}>
        <Status status={"Planned"} amount={1} />
        <Status status={"In Progress"} amount={2} />
        <Status status={"Live"} amount={3} />
      </div>
    </div>
  );
};

export default RoadmapPreview;
