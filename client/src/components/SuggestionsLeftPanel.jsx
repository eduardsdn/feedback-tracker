import React from "react";
import suggestionsLeftPanelStyle from "../styles/suggestions/suggestionsLeftPanel.module.scss";

import Categories from "./Categories";
import Title from "./Title";
import RoadmapPreview from "./RoadmapPreview";

const SuggestionsLeftPanel = function () {
  return (
    <div className={suggestionsLeftPanelStyle.suggestionsLeftPanel}>
      <Title />
      <Categories />
      <RoadmapPreview />
    </div>
  );
};

export default SuggestionsLeftPanel;
