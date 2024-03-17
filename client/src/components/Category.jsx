import React from "react";
import categoryStyle from "../styles/suggestions/category.module.scss";

const Category = function (props) {
  return (
    <>
      {props.isClickable ? (
        <div
          className={categoryStyle.category}
          onClick={() => {
            props.handleChooseCategory(props.categoryName);
            console.log(props.isClickable);
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
