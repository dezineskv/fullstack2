import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/global.css";
import toast from "react-hot-toast";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("error");
      });
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [setProducts, products]);

  return (
    <>
      <div className="w-full pt-8 flex flex-col mx-auto justify-center max-w-[1440px]">
        <div className="flex flex-col justify-center mx-auto sm: ml-8">
          <h1 className="text-black text-center">Featured Products</h1>
          <div className="flex flex-row justify-start gap-1 flex-wrap">
            {/* {products.map((product) => (
          // <Link key={product._id} to={`/products/delete/${product._id}`}>Delete
          <div
            key={product._id}
            className="flex flex-row justify-between border-b-2 w-[50vw] mx-auto"
          >
            {product.title}
            <div>
              <Link to={`/products/${product._id}`}>See Product</Link>
            </div>
            <div>
              <Link to={`/products/delete/${product._id}`}>Delete</Link>
              </div>
          </div>
        ))} */}
            {products.map((product) => (
              <div
                key={product._id}
                className="text-black gap-4 my-4 border-1 border-gray rounded-lg overflow-hidden shadow-lg mb-4 pb-4"
                style={{ marginBottom: "2rem", marginRight: "2rem" }}
              >
                <div className="w-[320px]">
                  <div className="mx-auto text-center py-6 pl-6 pr-6">
                    {product.title}
                  </div>
                  <div className="mx-auto pt-6 pl-6 pr-6 pb-0">
                    <img
                      className="prod-img mx-auto"
                      src={product.img}
                      alt="product image"
                    />
                  </div>
                  <div
                    className="align-middle pl-4 ml-4"
                    style={{ paddingLeft: "1rem" }}
                  >
                    <h4 className="text-black font-bold text-xl mb-2">
                      {product.title}
                    </h4>
                    <p className="text-black text-base">
                      {product.description}
                    </p>
                    <h3 className="text-black text-base">${product.price}</h3>
                    <br />
                    <div
                      className="flex flex-row justify-between"
                      style={{ paddingRight: "1rem" }}
                    >
                      <Link to={`/products/${product._id}`}>See Product</Link>
                      <Link to={`/products/delete/${product._id}`}>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
