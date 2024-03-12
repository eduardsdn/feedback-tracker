import React from "react";
import roadmapPreviewStyle from "../styles/suggestions/roadmapPreview.module.scss";

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
          <div className={roadmapPreviewStyle.left}>
            <div
              className={roadmapPreviewStyle.colorIndicator}
              id={roadmapPreviewStyle.planned}
            ></div>
            <p className={roadmapPreviewStyle.name}>Planned</p>
          </div>
          <p className={roadmapPreviewStyle.amount}>2</p>
        </div>

        <div className={roadmapPreviewStyle.statusPreview}>
          <div className={roadmapPreviewStyle.left}>
            <div
              className={roadmapPreviewStyle.colorIndicator}
              id={roadmapPreviewStyle.inProgress}
            ></div>
            <p className={roadmapPreviewStyle.name}>In-Progress</p>
          </div>
          <p className={roadmapPreviewStyle.amount}>3</p>
        </div>

        <div className={roadmapPreviewStyle.statusPreview}>
          <div className={roadmapPreviewStyle.left}>
            <div
              className={roadmapPreviewStyle.colorIndicator}
              id={roadmapPreviewStyle.live}
            ></div>
            <p className={roadmapPreviewStyle.name}>Live</p>
          </div>
          <p className={roadmapPreviewStyle.amount}>1</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPreview;
