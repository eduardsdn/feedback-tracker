import React from "react";
import suggestionCardsStyle from "../styles/suggestions/suggestionCards.module.scss";
import SuggestionCard from "./SuggestionCard";

// temorary
import suggestions from "../data/feedback.json";

const SuggestionCards = function () {
  return (
    <section className={suggestionCardsStyle.suggestionCards}>
      {suggestions.slice(0, 6).map((suggestion) => (
        <SuggestionCard
          title={suggestion.title}
          description={suggestion.description}
          category={suggestion.category}
          upvotes={suggestion.upvotes}
          comments={suggestion.comments}
        />
      ))}
    </section>
  );
};

export default SuggestionCards;
