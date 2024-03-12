import React from "react";
import categoryStyle from "../styles/suggestions/category.module.scss";

const Category = function (props) {
  console.log(props);
  return <div className={categoryStyle.category}>{props.categoryName}</div>;
};

export default Category;
