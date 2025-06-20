const mongoose = require("mongoose");
const { Schema } = mongoose;

// mongoose schema documentation, define a schema
const productSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  featured: { type: Boolean, required: true, default: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
