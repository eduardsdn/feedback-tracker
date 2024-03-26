import React from "react";
import suggestionCardsStyle from "../../styles/suggestions/suggestionCards.module.scss";
import SuggestionCard from "./SuggestionCard";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchFeedback } from "../state/feedbackSlice";

// temorary
const SuggestionCards = function ({ feedbacks }) {
  // const feedbacks = useSelector((state) => state.feedback.feedback);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchFeedback());
  // }, []);

  console.log(feedbacks);

  return (
    <section className={suggestionCardsStyle.suggestionCards}>
      {feedbacks.map((feedback) => (
        <SuggestionCard
          key={feedback.id}
          id={feedback.id}
          title={feedback.title}
          description={feedback.description}
          category={feedback.category}
          upvotes={feedback.upvotes}
          comments={feedback.comments}
        />
      ))}
    </section>
  );
};

export default SuggestionCards;
