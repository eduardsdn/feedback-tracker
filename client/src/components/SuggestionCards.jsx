import React from "react";
import suggestionCardsStyle from "../styles/suggestions/suggestionCards.module.scss";
import SuggestionCard from "./SuggestionCard";
import axios from "axios";

// temorary
const SuggestionCards = function () {
  const [suggestionsData, setSuggestionsData] = React.useState([]);

  const fetchFeedback = async () => {
    const { data } = await axios.get("/api/feedbacks");
    setSuggestionsData(data);
  };
  // Fetching feedbacks from the local server
  React.useEffect(() => {
    fetchFeedback();
  }, []);

  console.log(suggestionsData);

  return (
    <section className={suggestionCardsStyle.suggestionCards}>
      {suggestionsData.slice(0, 6).map((suggestion) => (
        <SuggestionCard
          id={suggestion.id}
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
