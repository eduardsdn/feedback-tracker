import React from "react";

import Status from "../shared/Status";
import Category from "../shared/Category";
import Upvote from "../shared/Upvote";
import CommentCounter from "../shared/CommentCounter";

import roadmapCardStyle from "../../styles/roadmap/roadmapCard.module.scss";

const RoadmapCard = function ({
  id,
  title,
  description,
  category,
  status,
  upvotes,
  comments,
}) {
  function getNumOfComments(comments) {
    let numOfComments;
    if (comments !== undefined) {
      //if feedback has comments
      numOfComments = comments.length; //get number of comments
    } else {
      numOfComments = 0; //otherwise set number of comments to 0
    }
    return numOfComments;
  }

  function getColorStatus(status) {
    switch (status) {
      case "planned":
        return roadmapCardStyle.planned;
      case "in-progress":
        return roadmapCardStyle.inProgress;
      case "live":
        return roadmapCardStyle.live;
      default:
        return roadmapCardStyle.planned;
    }
  }

  return (
    <div className={roadmapCardStyle.roadmapCard} id={getColorStatus(status)}>
      <Status status={status} />
      <h1 className={roadmapCardStyle.title}>{title}</h1>
      <p className={roadmapCardStyle.description}>{description}</p>
      <div className={roadmapCardStyle.categoryHolder}>
        <Category categoryName={category} />
      </div>
      <div className={roadmapCardStyle.bottom}>
        <Upvote upvotes={upvotes} />
        <CommentCounter numOfComments={getNumOfComments(comments)} />
      </div>
    </div>
  );
};

export default RoadmapCard;
