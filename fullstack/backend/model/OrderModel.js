const mongoose = require("mongoose");
const { Schema } = mongoose;

// mongoose schema documentation, define a schema
const orderSchema = new Schema({
  productId: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  featured: { type: Boolean, required: true, default: true },
  email: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
