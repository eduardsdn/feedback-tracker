import React from "react";
import suggestionCardsStyle from "../styles/suggestions/suggestionCards.module.scss";
import SuggestionCard from "./SuggestionCard";

const SuggestionCards = function () {
  return (
    <section className={suggestionCardsStyle.suggestionCards}>
      <SuggestionCard />
    </section>
  );
};

export default SuggestionCards;
