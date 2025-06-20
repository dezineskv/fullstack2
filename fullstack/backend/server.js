const express = require("express");
const cors = require("cors");
const connectionToDB = require("./db/dbConnection");
const app = express();
const port = 3000;
const authRoutes = require("./router/authRouter");
const productRoutes = require("./router/productRouter");
const orderRoutes = require("./router/orderRouter");

//middleware
app.use(cors());
app.use(express.json());

connectionToDB();
app.use(authRoutes);
app.use(productRoutes);
app.use(orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello it's working");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
