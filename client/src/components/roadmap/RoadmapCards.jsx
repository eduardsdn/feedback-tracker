import React from "react";
import RoadmapCard from "./RoadmapCard";

const RoadmapCards = function ({ feedbacks }) {
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );

  return (
    <div>
      <RoadmapCard />
    </div>
  );
};

export default RoadmapCards;
