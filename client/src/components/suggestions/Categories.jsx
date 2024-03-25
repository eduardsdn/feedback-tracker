import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenCategory } from "../../state/categoryFilterSlice";
import categoriesStyle from "../../styles/suggestions/categories.module.scss";
import Category from "../shared/Category";

const Categories = function () {
  const categoryNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  // temporary ^^^

  const dispatch = useDispatch();
  // const chosenCategory = useSelector(
  //   (state) => state.categoryFilter.chosenCategory
  // );

  const handleChooseCategory = function (categoryName) {
    dispatch(changeChosenCategory(categoryName));
    // console.log(chosenCategory);
  };

  return (
    <div className={categoriesStyle.categoriesContainer}>
      {categoryNames.map((categoryName) => (
        <Category
          isClickable={true}
          categoryName={categoryName}
          handleChooseCategory={handleChooseCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
