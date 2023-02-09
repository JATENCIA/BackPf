const mongoose = require("mongoose");
require("dotenv").config();

process.env.MONGOHOST;
process.env.MONGOPASSWORD;
process.env.MONGOPORT;
process.env.MONGOUSER;

const MONGO_URL = `mongodb://MONGOUSER:MONGOPASSWORD@containers-us-west-147.railway.app:6604`;

const MONGODB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connected to MongoDB-URL"))
    .catch((error) =>
      console.error("Error connection to MongoDB-URL", error.message)
    );
};

module.exports = { MONGODB };
