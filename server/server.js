import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import feedbacks from "./data/feedback.json" with {type: "json"}
import { getAllFeedbacks } from "./db.js";

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3003" }));

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/api/feedbacks", async (req, res) => {
  const feedbacks = await getAllFeedbacks();
  res.send(feedbacks);
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
