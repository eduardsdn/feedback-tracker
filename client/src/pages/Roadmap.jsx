import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedback } from "../state/feedbackSlice";
import { useLocation } from "react-router-dom";

import roadmapStyle from "../styles/roadmap/roadmap.module.scss";

import RoadmapTopPanel from "../components/roadmap/RoadmapTopPanel";
import RoadmapCards from "../components/roadmap/RoadmapCards";

const Roadmap = function () {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(sortBy);
    //on state change of category filter or sorting option dispatch fetchFeedback action to feedbackReducer providing api endpoint with params
    dispatch(fetchFeedback(`http://localhost:5006/api/feedbacks/all/most_upvotes`));
  }, [dispatch]);

  const feedbacks = useSelector((state) => state.feedback.feedback);
  console.log(feedbacks);

  // const plannedFeedbacks = feedbacks.filter((feedback) => feedback.status === "planned");
  // const inProgressFeedbacks = feedbacks.filter((feedback) => feedback.status === "in-progress");
  // const liveFeedbacks = feedbacks.filter((feedback) => (feedback.status = "in-progress"));

  return (
    <div className={roadmapStyle.roadmap}>
      <RoadmapTopPanel />
      <RoadmapCards feedbacks={feedbacks} />
    </div>
  );
};

export default Roadmap;
