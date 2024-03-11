import express from "express";
import dotenv from "dotenv"
import feedbacks from "./data/feedback.json" with {type: "json"}

const app = express();
dotenv.config()

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/api/feedbacks", (req, res) => {
  res.json(feedbacks);
});

// route params
app.get('/api/feedbacks/:id', (req, res) => {
    const feedback = feedbacks.find((feedback) => feedback.id === Number(req.params.id))
    res.json(feedback)
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => `Server is listening on port ${PORT}`);
