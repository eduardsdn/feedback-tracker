import React from "react";
import { useNavigate } from "react-router-dom";
import Upvote from "./Upvote";
import Category from "./Category";
import suggestionCardStyle from "../../styles/suggestions/suggestionCard.module.scss";
import commentIcon from "../../assets/shared/icon-comments.svg";

const SuggestionCard = function ({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
}) {
  let numOfComments;
  if (comments != undefined) {
    //if feedback has comments
    numOfComments = comments.length; //get number of comments
  } else {
    numOfComments = 0; //otherwise set number of comments to 0
  }
  const navigate = useNavigate();

  // const handleClickCard = () => {
  //   navigate("/feedbackdetail");
  //   history.push({ pathname: "/feedbackdetail", state: { feedback: title } });
  // };

  return (
    <div
      className={suggestionCardStyle.suggestionCard}
      onClick={() => navigate(`/feedbackdetail/${id}`)}
    >
      <div className={suggestionCardStyle.left}>
        <div className={suggestionCardStyle.upvote}>
          <Upvote upvotes={upvotes}></Upvote>
          {/* render upvote component passing number of upvotes */}
        </div>
        <div className={suggestionCardStyle.textContent}>
          <h2 className={suggestionCardStyle.title}>{title}</h2>
          <p className={suggestionCardStyle.detail}>{description}</p>
          <Category categoryName={category} />
          {/* render category component passing name of the category, note it is not clickable */}
        </div>
      </div>
      <div className={suggestionCardStyle.commentsIndicator}>
        <img src={commentIcon} alt="" />
        <span className={suggestionCardStyle.commentsAmount}>
          {numOfComments}
        </span>
      </div>
    </div>
  );
};

export default SuggestionCard;
