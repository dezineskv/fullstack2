const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB;

const connectionToDB = async () => {
  await mongoose
    .connect(uri)
    .then(() =>
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      )
    )
    .catch((error) => console.log(error));
};

module.exports = connectionToDB;
