import React from "react";

import roadmapCardsStyle from "../../styles/roadmap/roadmapCards.module.scss";

import RoadmapCard from "./RoadmapCard";

const RoadmapCards = function ({ feedbacks }) {
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "live"
  );

  function getNumOfFeedbakcs(feedbacks) {
    let numOfFeedbacks;
    if (feedbacks !== undefined) {
      numOfFeedbacks = feedbacks.length;
    } else {
      numOfFeedbacks = 0;
    }
    return numOfFeedbacks;
  }

  return (
    <div className={roadmapCardsStyle.roadmapCards}>
      <div className={roadmapCardsStyle.cardsColumn}>
        <div className={roadmapCardsStyle.columnInfo}>
          <h1 className={roadmapCardsStyle.columnTitle}>
            Planned{" "}
            <span className={roadmapCardsStyle.numOfFeedbacks}>
              ({getNumOfFeedbakcs(plannedFeedbacks)})
            </span>
          </h1>
          <p className={roadmapCardsStyle.columnDescription}>
            Ideas prioritized for research
          </p>
        </div>
        {plannedFeedbacks.map((feedback) => (
          <RoadmapCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            status={feedback.status}
            upvotes={feedback.upvotes}
            comments={feedback.comments}
          />
        ))}
      </div>
      <div className={roadmapCardsStyle.cardsColumn}>
        <div className={roadmapCardsStyle.columnInfo}>
          <h1 className={roadmapCardsStyle.columnTitle}>
            In-Progress{" "}
            <span className={roadmapCardsStyle.numOfFeedbacks}>
              ({getNumOfFeedbakcs(inProgressFeedbacks)})
            </span>
          </h1>
          <p className={roadmapCardsStyle.columnDescription}>
            Ideas prioritized for research
          </p>
        </div>
        {inProgressFeedbacks.map((feedback) => (
          <RoadmapCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            status={feedback.status}
            upvotes={feedback.upvotes}
            comments={feedback.comments}
          />
        ))}
      </div>

      <div className={roadmapCardsStyle.cardsColumn}>
        <div className={roadmapCardsStyle.columnInfo}>
          <h1 className={roadmapCardsStyle.columnTitle}>
            Live{" "}
            <span className={roadmapCardsStyle.numOfFeedbacks}>
              ({getNumOfFeedbakcs(liveFeedbacks)})
            </span>
          </h1>
          <p className={roadmapCardsStyle.columnDescription}>
            Ideas prioritized for research
          </p>
        </div>
        {liveFeedbacks.map((feedback) => (
          <RoadmapCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            status={feedback.status}
            upvotes={feedback.upvotes}
            comments={feedback.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapCards;
