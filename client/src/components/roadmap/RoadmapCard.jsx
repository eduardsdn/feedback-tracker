import React from "react";

import Status from "../shared/Status";
import Category from "../shared/Category";
import Upvote from "../shared/Upvote";

import roadmapCardStyle from "../../styles/roadmap/roadmapCard.module.scss";
import Roadmap from "../../pages/Roadmap";

const RoadmapCard = function ({
  id,
  title,
  description,
  category,
  status,
  upvotes,
  comments,
}) {
  return (
    <div className={roadmapCardStyle.roadmapCardStyle}>
      <Status status={status} />
      <h1 className={roadmapCardStyle.title}>{title}</h1>
      <p className={roadmapCardStyle.description}>{description}</p>
      <Category categoryName={category} />
      <div className={roadmapCardStyle.bottom}>
        <Upvote upvotes={upvotes} />
      </div>
    </div>
  );
};

export default RoadmapCard;
