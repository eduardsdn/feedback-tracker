import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_DB_URI;

const client = new MongoClient(uri);
const db = client.db("FeedbackTracker");
try {
  await client.connect();
} catch (e) {
  console.log(e);
}

const addFeedback = async function (feedback) {
  console.log(feedback);
  client
    .db("FeedbackTracker")
    .collection("Feedbacks")
    .insertOne(feedback, { writeConcern: { w: 0 } });
};

const getSortedFeedbacksByCategory = async function (category, sortBy) {
  let find = {};
  let field = "upvotes";
  let order = 1;

  console.log(category, sortBy);

  if (category !== "all") {
    find = { category: category };
  }

  // console.log(find);
  // console.log(`${order}`);

  switch (sortBy) {
    case "most_upvotes":
      return sortByUpvotes(-1);
    case "least_upvotes":
      return sortByUpvotes(1);
    case "most_comments":
      return sortByComments(-1);
    case "least_comments":
      return sortByComments(1);
  }

  async function sortByUpvotes(order) {
    const feedbacks = await client
      .db("FeedbackTracker")
      .collection("Feedbacks")
      .find(find)
      .sort({ upvotes: order })
      .toArray();
    return feedbacks;
  }

  async function sortByComments(order) {
    console.log(find);
    console.log(order);
    const feedbacks = client
      .db("FeedbackTracker")
      .collection("Feedbacks")
      .aggregate([
        { $match: find },
        {
          $addFields: {
            commentsCount: {
              $cond: {
                if: { $isArray: "$comments" }, // Check if 'comments' is an array
                then: { $size: "$comments" }, // Calculate size if it's an array
                else: 0, // Set to 0 if 'comments' is not an array
              },
            },
          },
        },
        { $sort: { commentsCount: order } }, // Sort in descending order of comments count
      ])
      .toArray();

    // console.log(feedbacks);
    return feedbacks;
  }
};

// const getAllFeedbacks = async function () {
//   const feedbacksAll = await client
//     .db("FeedbackTracker")
//     .collection("Feedbacks")
//     .find({})
//     .toArray();

//   return feedbacksAll;
// };

export { getSortedFeedbacksByCategory, addFeedback };
