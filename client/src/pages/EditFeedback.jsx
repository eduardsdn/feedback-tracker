import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import DropdownMenu from "../components/shared/DropdownMenu";
import Button from "../components/buttons/Button";
import GoBackBtn from "../components/buttons/GoBackBtn";
import formsStyle from "../styles/forms/forms.module.scss";

import plusIcon from "../assets/shared/icon-new-feedback.svg";

const EditFeedback = function () {
  // For this form I make use of react hook form
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [selectCategoryHidden, setSelectCategoryHidden] = React.useState(true); //state handling if select input dropdown is shown
  const [selectStatusHidden, setSelectStatusHidden] = React.useState(true);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    React.useState("Feature"); //state handling select input value, Feature by default
  const [selectedStatusOption, setSelectedStatusOption] =
    React.useState("Planned");
  React.useState("Planned");
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]; //array of categories available in select input dropdown
  const statuses = ["Suggestion", "Planned", "In-Progress", "Live"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleCategoryDropdownMenu() {
    console.log(selectCategoryHidden);
    setSelectCategoryHidden(!selectCategoryHidden);
  }

  function toggleStatusDropdownMenu() {
    setSelectStatusHidden(!selectStatusHidden);
  }

  function selectCategoryOption(option) {
    setSelectedCategoryOption(option);
  }

  function selectStatusOption(option) {
    setSelectedStatusOption(option);
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
        <form className={formsStyle.form} action="">
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
              value={selectedCategoryOption}
              onClick={() => toggleCategoryDropdownMenu()}
              {...register("category")}
            />
            {!selectCategoryHidden ? (
              <DropdownMenu
                mountedOn={"form"}
                options={categories}
                selectOption={selectCategoryOption}
                selectedOption={selectedCategoryOption}
              />
            ) : null}
          </div>

          <div className={`${formsStyle.inputHolder} ${formsStyle.select}`}>
            <label htmlFor="">Update Status</label>
            <p className={formsStyle.inputDescription}>Change feedback state</p>
            <input
              className={`${formsStyle.inputField} ${formsStyle.select}`}
              type="text"
              readOnly
              value={selectedStatusOption}
              onClick={() => toggleStatusDropdownMenu()}
              {...register("category")}
            />
            {!selectStatusHidden ? (
              <DropdownMenu
                mountedOn={"form"}
                options={statuses}
                selectOption={selectStatusOption}
                selectedOption={selectedStatusOption}
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
            <Button color={"red"} text={"Delete"}></Button>

            <Link to="/">
              <Button color={"black"} text={"Cancel"}></Button>
            </Link>

            <Button
              color={"purple"}
              text={"Save Changes"}
              type="submit"
            ></Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditFeedback;
