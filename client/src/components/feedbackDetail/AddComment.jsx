import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import formsStyle from "../../styles/forms/forms.module.scss";
import addCommentStyle from "../../styles/feedbackDetail/addComment.module.scss";
import Button from "../../components/buttons/Button";

const AddComment = function ({ commentID }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(formData) {
    console.log("submitted");
  }

  return (
    <div className={addCommentStyle.addComment}>
      <h1 className={addCommentStyle.title}>Add Comment</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder="Type your comment here"
          className={!errors.content ? addCommentStyle.input : addCommentStyle.inputError}
          {...register("content", {
            required: { value: true, message: "Can't be empty" },
          })}
        ></textarea>
        <p className={formsStyle.errorMessage}>{errors.content?.message}</p>
        <div className={addCommentStyle.btnHolder}>
          <Button color="purple" text="Post Comment" />
        </div>
      </form>
    </div>
  );
};

export default AddComment;
