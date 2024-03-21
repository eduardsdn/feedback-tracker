import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import addFeedbackStyle from "../styles/addFeedback/addFeedback.module.scss";
import iconArrowLeft from "../assets/shared/icon-arrow-left.svg";
import plusIcon from "../assets/shared/icon-new-feedback.svg";

const AddFeedback = function () {
  const form = useForm();

  return (
    <div className={addFeedbackStyle.addFeedback}>
      <header>
        <nav className={addFeedbackStyle.navigation}>
          <Link to="/" className={addFeedbackStyle.goBackLink}>
            <img src={iconArrowLeft} alt="" />
            <p className={addFeedbackStyle.linkText}>Go Back</p>
          </Link>
        </nav>
      </header>

      <main className={addFeedbackStyle.formContainer}>
        <img src={plusIcon} className={addFeedbackStyle.plusIcon} alt="" />
        <h1 className={addFeedbackStyle.formTitle}>Create New Feedback</h1>
        <form className={addFeedbackStyle.addFeedbackForm} action="">
          <div className={addFeedbackStyle.inputHolder}>
            <label htmlFor="title">Feedback Title</label>
            <p className={addFeedbackStyle.inputDescription}>
              Add a short, descriptive headline
            </p>
            <input
              className={addFeedbackStyle.inputField}
              id="title"
              type="text"
            />
          </div>

          <div className={addFeedbackStyle.inputHolder}>
            <label htmlFor="">Category</label>
            <p className={addFeedbackStyle.inputDescription}>
              Choose a category for your feedback
            </p>
            <input className={addFeedbackStyle.inputField} type="text" />
          </div>

          <div className={addFeedbackStyle.inputHolder}>
            <label htmlFor="">Feedback Detail</label>
            <p className={addFeedbackStyle.inputDescription}>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea className={addFeedbackStyle.inputField} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddFeedback;
