import React from "react";
import { useForm } from "react-hook-form";
import { UseDispatch, useDispatch } from "react-redux";
import { addFeedback } from "../state/feedbackSlice";
import { Link } from "react-router-dom";
import SelectInputDropdown from "../components/forms/SelectInputDropdown";
import Button from "../components/buttons/Button";
import formsStyle from "../styles/forms/forms.module.scss";
import iconArrowLeft from "../assets/shared/icon-arrow-left.svg";
import plusIcon from "../assets/shared/icon-new-feedback.svg";

const AddFeedback = function () {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [selectHidden, setSelectHidden] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("Feature");
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const dispatch = useDispatch();

  function onSubmit(formData) {
    const feedback = {
      title: formData.title,
      category: formData.category.toLowerCase(),
      upvotes: 0,
      status: "planned",
      description: formData.description,
      comments: [],
    };
    console.log(feedback);
    dispatch(
      addFeedback({ apiEndpoint: "/api/feedbacks/addFeedback", data: feedback })
    );
    // addFeedback(formData);
  }

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
        <form
          className={formsStyle.form}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={formsStyle.inputHolder}>
            <label htmlFor="title">Feedback Title</label>
            <p className={formsStyle.inputDescription}>
              Add a short, descriptive headline
            </p>
            <input
              className={`${formsStyle.inputField} ${
                errors.title ? formsStyle.inputError : ""
              }`}
              id="title"
              type="text"
              {...register("title", {
                required: { value: true, message: "Can't be empty" },
              })}
            />
            <p className={formsStyle.errorMessage}>{errors.title?.message}</p>
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
              {...register("category")}
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
            <textarea
              className={`${formsStyle.inputField} ${
                errors.detail ? formsStyle.inputError : ""
              }`}
              {...register("description", {
                required: { value: true, message: "Can't be empty" },
              })}
            />
            <p className={formsStyle.errorMessage}>{errors.detail?.message}</p>
          </div>

          <div className={formsStyle.buttonsContainer}>
            <Link to="/">
              <Button color={"black"} text={"Cancel"}></Button>
            </Link>

            <Button
              color={"purple"}
              text={"Add Feedback"}
              type="submit"
            ></Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddFeedback;
