import React from "react";
import SuggestionCard from "../shared/SuggestionCard";

const RoadmapCards = function ({ feedbacks }) {
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );
  //   const liveFeedbacks = feedbacks.filter(
  //     (feedback) => (feedback.status = "in-progress")
  //   );

  return (
    <div>
      {plannedFeedbacks.map((feedback) => (
        <SuggestionCard
          key={feedback._id}
          id={feedback.id}
          title={feedback.title}
          description={feedback.description}
          category={feedback.category}
          upvotes={feedback.upvotes}
          comments={feedback.comments}
        />
      ))}

      {inProgressFeedbacks.map((feedback) => (
        <SuggestionCard
          key={feedback._id}
          id={feedback.id}
          title={feedback.title}
          description={feedback.description}
          category={feedback.category}
          upvotes={feedback.upvotes}
          comments={feedback.comments}
        />
      ))}
    </div>
  );
};

export default RoadmapCards;
