import React from "react";
import { useDispatch } from "react-redux";
import { changeChosenCategory } from "../../state/categoryFilterSlice";
import { v4 as uuidv4 } from "uuid";
import categoriesStyle from "../../styles/suggestions/categories.module.scss";
import Category from "../shared/Category";

const Categories = function () {
  const categoryNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const dispatch = useDispatch();

  const handleChooseCategory = function (categoryName) {
    dispatch(changeChosenCategory(categoryName)); //dispatch changeChosenCategory to categoryFilter reducer passing category name
  };

  return (
    <div className={categoriesStyle.categoriesContainer}>
      {categoryNames.map(
        (
          categoryName //render category components from categoryNames array
        ) => (
          <Category
            key={uuidv4()}
            isClickable={true} //If true, clicking category will call handleChooseCategory which will change state of category filter.
            //This component is used in other places and is not necessary clickable
            categoryName={categoryName}
            handleChooseCategory={handleChooseCategory}
          />
        )
      )}
    </div>
  );
};

export default Categories;
