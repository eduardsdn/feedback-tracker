import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getSortedFeedbacksByCategory, addFeedback, deleteFeedback, editFeedback, addUpvote } from "./db.js";

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3003" }), express.json());

app.get("/api/feedbacks/:category/:sortBy", async (req, res) => {
  const category = req.params.category;
  const sortBy = req.params.sortBy;
  const feedbacksFeature = await getSortedFeedbacksByCategory(category, sortBy);
  res.send(feedbacksFeature);
});

app.post("/api/feedbacks/addFeedback", (req, res) => {
  const feedback = req.body;
  addFeedback(feedback);
});

app.delete("/api/feedbacks/deleteFeedback/:feedbackID", async (req, res) => {
  // const feedbackID = req.body;

  const feedbackID = req.params.feedbackID;

  await deleteFeedback(feedbackID);
  res.status(200).json(`Complete, deleted ${feedbackID}`);
});

app.put("/api/feedbacks/editFeedback", (req, res) => {
  const feedbackData = req.body;
  const feedbackID = req.body.feedbackID;
  // const feedbackID = feedbackData.id;
  console.log(req.body);

  editFeedback(feedbackID, feedbackData);
  res.status(200).json("Complete");
});

app.put("/api/feedbacks/addUpvote/", async (req, res) => {
  const { feedbackID } = req.body
  const { upvotes } = req.body
  await addUpvote(feedbackID, upvotes).then(res.status(200).json("Complete"))
  
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
