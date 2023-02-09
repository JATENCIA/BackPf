const mongoose = require("mongoose");
require("dotenv").config();

MONGO_URL = `mongodb://{ process.env.MONGOUSER }:{ process.env.MONGOPASSWORD }@{ process.env.MONGOHOST }:{ process.env.MONGOPORT }`;

const MONGODB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) =>
      console.error("Error connection to MongoDB", error.message)
    );
};

module.exports = { MONGODB };
