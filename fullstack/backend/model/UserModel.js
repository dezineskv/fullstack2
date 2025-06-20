const mongoose = require("mongoose");
const { Schema } = mongoose;

// mongoose schema documentation, define a schema
const userSchema = new Schema({
  name: { type: String }, // String is shorthand for {type: String}
  // photo: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
