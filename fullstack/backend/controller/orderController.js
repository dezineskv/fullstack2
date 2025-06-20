const Order = require("../model/OrderModel");

const createOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  res.send({
    data: result,
    status: 200,
    message: "Order created successfully",
  });
};

const getAllOrders = async (req, res) => {
  const result = await Order.find({});
  res.send({
    data: result,
    status: 200,
    message: "orders retrieved successfully",
  });
};
//   const { email } = req.body;
//   const result = await Order.findOne({ email: email });
//   res.send({
//     data: result,
//     status: 200,
//     message: "Orders retrieved successfully",
//   });
// };

module.exports = {
  createOrder,
  getAllOrders,
};
