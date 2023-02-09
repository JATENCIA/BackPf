const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB-URL"))
    .catch((error) =>
      console.error("Error connection to MongoDB-URL", error.message)
    );
};

module.exports = { MONGODB };
