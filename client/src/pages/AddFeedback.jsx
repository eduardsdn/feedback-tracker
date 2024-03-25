import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SelectInputDropdown from "../components/SelectInputDropdown";
import Button from "../components/buttons/Button";
import formsStyle from "../styles/forms/forms.module.scss";
import iconArrowLeft from "../assets/shared/icon-arrow-left.svg";
import plusIcon from "../assets/shared/icon-new-feedback.svg";

const AddFeedback = function () {
  const form = useForm();
  const [selectHidden, setSelectHidden] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("Feature");

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  function toggleSelectDropdown() {
    setSelectHidden(!selectHidden);
    console.log(selectHidden);
  }

  function selectOption(option) {
    setSelectedOption(option);
  }

  return (
    <div className={formsStyle.addFeedback}>
      <header>
        <nav className={formsStyle.navigation}>
          <Link to="/" className={formsStyle.goBackLink}>
            <img src={iconArrowLeft} alt="" />
            <p className={formsStyle.linkText}>Go Back</p>
          </Link>
        </nav>
      </header>

      <main className={formsStyle.formContainer}>
        <img src={plusIcon} className={formsStyle.decorIcon} alt="" />
        <h1 className={formsStyle.formTitle}>Create New Feedback</h1>
        <form className={formsStyle.form} action="">
          <div className={formsStyle.inputHolder}>
            <label htmlFor="title">Feedback Title</label>
            <p className={formsStyle.inputDescription}>
              Add a short, descriptive headline
            </p>
            <input className={formsStyle.inputField} id="title" type="text" />
          </div>

          <div className={`${formsStyle.inputHolder} ${formsStyle.select}`}>
            <label htmlFor="">Category</label>
            <p className={formsStyle.inputDescription}>
              Choose a category for your feedback
            </p>
            <input
              className={`${formsStyle.inputField} ${formsStyle.select}`}
              type="text"
              readOnly
              value={selectedOption}
              onClick={toggleSelectDropdown}
            />
            {!selectHidden ? (
              <SelectInputDropdown
                categories={categories}
                selectOption={selectOption}
              />
            ) : null}
          </div>

          <div className={formsStyle.inputHolder}>
            <label htmlFor="">Feedback Detail</label>
            <p className={formsStyle.inputDescription}>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea className={formsStyle.inputField} />
          </div>
        </form>

        <div className={formsStyle.buttonsContainer}>
          <Link to="/">
            <Button color={"black"} text={"Cancel"}></Button>
          </Link>

          <Button color={"purple"} text={"Add Feedback"}></Button>
        </div>
      </main>
    </div>
  );
};

export default AddFeedback;
