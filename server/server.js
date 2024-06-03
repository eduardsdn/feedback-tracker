import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getSortedFeedbacksByCategory, addFeedback } from "./db.js";

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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
