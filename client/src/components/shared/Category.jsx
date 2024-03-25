import React from "react";
import categoryStyle from "../../styles/suggestions/category.module.scss";
import { useSelector } from "react-redux";

const Category = function (props) {
  const chosenCategory = useSelector(
    (state) => state.categoryFilter.chosenCategory
  );
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (props.categoryName.toLowerCase() === chosenCategory) {
      setIsActive(true);
    } else if (props.categoryName.toLowerCase() !== chosenCategory) {
      setIsActive(false);
    }
  }, [chosenCategory]);

  return (
    <>
      {props.isClickable ? (
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
