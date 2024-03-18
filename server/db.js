import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_DB_URI;

const client = new MongoClient(uri);

try {
  await client.connect();
} catch (e) {
  console.log(e);
}

const getAllFeedbacks = async function () {
  const feedbacksAll = await client
    .db("FeedbackTracker")
    .collection("Feedbacks")
    .find({})
    .toArray();

  return feedbacksAll;
};

const getFeedbacksByCategory = async function (category) {
  const feedbacksFeature = await client
    .db("FeedbackTracker")
    .collection("Feedbacks")
    .find({ category: category })
    .toArray();

  return feedbacksFeature;
};

export { getAllFeedbacks, getFeedbacksByCategory };
