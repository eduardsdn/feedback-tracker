import React from "react";
import categoriesStyle from "../styles/categories.module.scss";
import Category from "./Category";

const Categories = function () {
  const categoryNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  // temporary ^^^

  return (
    <div className={categoriesStyle.categoriesContainer}>
      {categoryNames.map((categoryName) => (
        <Category categoryName={categoryName} />
      ))}
    </div>
  );
};

export default Categories;
