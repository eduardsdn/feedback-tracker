import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFeedback } from "../state/feedbackSlice";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../components/shared/DropdownMenu";
import Button from "../components/buttons/Button";
import GoBackBtn from "../components/buttons/GoBackBtn";
import formsStyle from "../styles/forms/forms.module.scss";
// import iconArrowLeft from "../assets/shared/icon-arrow-left.svg";
import plusIcon from "../assets/shared/icon-new-feedback.svg";

const AddFeedback = function () {
  // For this form I make use of react hook form
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [selectHidden, setSelectHidden] = React.useState(true); //state handling if select input dropdown is shown
  const [selectedOption, setSelectedOption] = React.useState("Feature"); //state handling select input value, Feature by default
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]; //array of categories available in select input dropdown

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(formData) {
    // define feedback object which will be passed in post request body
    const feedback = {
      id: uuidv4(),
      title: formData.title,
      category: formData.category.toLowerCase(),
      upvotes: 0,
      status: "planned",
      description: formData.description,
      comments: [],
    };
    dispatch(
      addFeedback({
        apiEndpoint: "http://localhost:5006/api/feedbacks/addFeedback",
        data: feedback,
      }) //dispatch addFeedback action to feedback reducer passing feedback object
    );
    navigate("/");
  }

  function toggleDropdownMenu() {
    setSelectHidden(!selectHidden);
  }

  function selectOption(option) {
    setSelectedOption(option);
  }

  return (
    <div className={formsStyle.addFeedback}>
      <header>
        <nav className={formsStyle.navigation}>
          <GoBackBtn route="/" />
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
              onClick={toggleDropdownMenu}
              {...register("category")}
            />
            {!selectHidden ? (
              <DropdownMenu
                mountedOn={"form"}
                options={categories}
                selectOption={selectOption}
                selectedOption={selectedOption}
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
