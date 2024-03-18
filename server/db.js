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

const getSortedFeedbacksByCategory = async function (category, sortBy) {
  let find = {};
  let field = "upvotes";
  let order = 1;

  if (category !== "all") {
    find = { category: category };
  }

  switch (sortBy) {
    case "most_upvotes":
      field = "upvotes";
      order = -1;
      break;
    case "least_upvotes":
      field = "upvotes";
      order = 1;
  }

  console.log(field, order);

  const feedbacks = await client
    .db("FeedbackTracker")
    .collection("Feedbacks")
    .find(find)
    .sort({ upvotes: order })
    .toArray();

  return feedbacks;
};

const sortFeedbacks = async function (feedbacks, sortBy) {};

export { getAllFeedbacks, getSortedFeedbacksByCategory };
