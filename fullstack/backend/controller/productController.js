const Product = require("../model/ProductModel");

//create product
const createProduct = async (req, res) => {
  let newProduct = req.body;
  newProduct = {
    ...newProduct,
    price: Number(newProduct.price),
    rating: Number(newProduct.rating),
  };

  const result = await Product.create(newProduct);
  res.send({
    data: result,
    status: 200,
    message: "product created successfully",
  });
};

//bulk upload many products at once
const createBulkProduct = async (req, res) => {
  let productsMany = req.body;
  const result = await Product.insertMany(productsMany);
  res.send({
    data: result,
    status: 200,
    message: "bulk products created successfully",
  });
};

// get all products
const getAllProducts = async (req, res) => {
  const result = await Product.find({});
  res.send({
    data: result,
    status: 200,
    message: "products retrieved successfully",
  });
};

//get a single product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  //   const result = await Product.findOne({ _id: new ObjectId(id) });
  const result = await Product.findOne({ _id: id });

  res.send({
    data: result,
    status: 200,
    message: "product retrieved successfully",
  });
};

//delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.deleteOne({ _id: id });
  res.send({
    data: result,
    status: 200,
    message: "Product deleted successfully",
  });
};

//edit/update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const updatedProduct = req.body;
  const updatedDocument = {
    $set: {
      title: updatedProduct.title,
      img: updatedProduct.img,
      description: updatedProduct.description,
      price: updatedProduct.price,
      rating: updatedProduct.rating,
      category: updatedProduct.category,
      featured: updatedProduct.featured,
    },
  };
  const result = await Product.updateOne(filter, updatedDocument);
  res.send({
    data: result,
    status: 200,
    message: "product updated successfully",
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createBulkProduct,
};
