import React from "react";
import suggestionCardsStyle from "../../styles/suggestions/suggestionCards.module.scss";
import SuggestionCard from "../shared/SuggestionCard";

// temorary
const SuggestionCards = function ({ feedbacks }) {
  //Component recieves fetched previously feedbacks
  return (
    <section className={suggestionCardsStyle.suggestionCards}>
      {feedbacks.map((feedback) => (
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
    </section>
  );
};

export default SuggestionCards;
