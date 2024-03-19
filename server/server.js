import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getSortedFeedbacksByCategory } from "./db.js";

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3003" }));

app.get("/", (req, res) => {
  res.send("Hi!");
});

// app.get("/api/feedbacks/all/:sortBy", async (req, res) => {
//   const category = req.params.sortBy;
//   console.log(category);
//   const feedbacksAll = await getAllFeedbacks();
//   res.send(feedbacksAll);
// });

app.get("/api/feedbacks/:category/:sortBy", async (req, res) => {
  const category = req.params.category;
  const sortBy = req.params.sortBy;
  // console.log(category);
  console.log(category, sortBy);
  const feedbacksFeature = await getSortedFeedbacksByCategory(category, sortBy);
  // console.log(feedbacksFeature);
  res.send(feedbacksFeature);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => `Server is listening on port ${PORT}`);
