import React from "react";
import categoryStyle from "../../styles/suggestions/category.module.scss";
import { useSelector } from "react-redux";

const Category = function (props) {
  const chosenCategory = useSelector(
    (state) => state.categoryFilter.chosenCategory
  ); //get a hold of category filter state
  const [isActive, setIsActive] = React.useState(false); //this state manages visual active state of a component

  React.useEffect(() => {
    if (props.categoryName.toLowerCase() === chosenCategory) {
      setIsActive(true);
    } else if (props.categoryName.toLowerCase() !== chosenCategory) {
      setIsActive(false);
    }
  }, [chosenCategory]); //on change category filter state if categoryName of the component is the same set it active

  return (
    <>
      {props.isClickable ? ( //if it is clickable, render clickable version which onClick can dispatch changeChosenCategory and toggle active state
        <div
          className={`${categoryStyle.category} ${
            isActive ? categoryStyle.active : ""
          }`}
          onClick={() => {
            props.handleChooseCategory(props.categoryName.toLowerCase());
          }}
        >
          {props.categoryName}
        </div>
      ) : (
        <div className={categoryStyle.category}>{props.categoryName}</div>
      )}
    </>
  );
};

export default Category;
