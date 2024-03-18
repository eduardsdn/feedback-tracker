import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getAllFeedbacks, getFeedbacksByCategory } from "./db.js";

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3003" }));

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/api/feedbacks/all", async (req, res) => {
  const feedbacksAll = await getAllFeedbacks();
  res.send(feedbacksAll);
});

app.get("/api/feedbacks/:category", async (req, res) => {
  const category = req.params.category;
  // console.log(category);
  const feedbacksFeature = await getFeedbacksByCategory(category);
  // console.log(feedbacksFeature);
  res.send(feedbacksFeature);
});

// route params
// app.get("/api/feedbacks/:id", (req, res) => {
//   const feedback = feedbacks.find(
//     (feedback) => feedback.id === Number(req.params.id)
//   );
//   res.json(feedback);
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => `Server is listening on port ${PORT}`);
