import React from "react";
import roadmapPreviewStyle from "../styles/roadmapPreview.module.scss";

const RoadmapPreview = function () {
  // MAP ROADMAP PREVIEWS!!!

  return (
    <div className={roadmapPreviewStyle.roadmapPreview}>
      <div className={roadmapPreviewStyle.top}>
        <h3 className={roadmapPreviewStyle.heading}>Roadmap</h3>
        <a href="/" className={roadmapPreviewStyle.viewLink}>
          View
        </a>
      </div>

      <div className={roadmapPreviewStyle.statusPreviews}>
        <div className={roadmapPreviewStyle.statusPreview}>
          <p className={roadmapPreviewStyle.name}>Planned</p>
          <p className={roadmapPreviewStyle.amount}>2</p>
        </div>

        <div className={roadmapPreviewStyle.statusPreview}>
          <p className={roadmapPreviewStyle.name}>In-Progress</p>
          <p className={roadmapPreviewStyle.amount}>3</p>
        </div>

        <div className={roadmapPreviewStyle.statusPreview}>
          <p className={roadmapPreviewStyle.name}>Live</p>
          <p className={roadmapPreviewStyle.amount}>1</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPreview;
