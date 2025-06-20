import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";
import { ProdContext } from "../App";
import toast from "react-hot-toast";

function SingleProduct() {
  const [products, setProducts] = useContext(ProdContext);
  const [singleProduct, setSingleProduct] = useState();
  //   const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  //   useEffect(() => {
  //     localStorage.setItem("products", JSON.stringify(products));
  //   }, [setProducts, products]);

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3000/products${id}`)
  //       .then((response) => {
  //         setProducts(response.data.data);

  //         setLoading(false); // Set loading to false after fetching
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching products:", error);
  //         setError("Failed to load products.");
  //         setLoading(false); // Set loading to false on error
  //       });
  //   }, [id, products]);

  useEffect(() => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data.data);
        toast.success("Product Successfully Deleted!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency would mean this runs only once on mount

  //   const deleteProduct = (id) => {
  //     // e.prevent.default()
  //     setSingleProduct(products?.filter((p) => p._id !== id));
  //     console.log("product deleted");
  //     toast.success("Product Successfully Deleted!");
  //   };

  //   if (loading) {
  //     return <div>Loading product...</div>;
  //   }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singleProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <br />
      <div className="max-w-[1440px] flex flex-col justify-center align-middle mx-auto text-center">
        Product {singleProduct.title} Deleted
        <br />
        <Link to="/products">All Products</Link>
      </div>
      {/* <div className="text-center mx-auto w-full flex ">
        <div className="max-w[1440px] mx-auto">
          <h1>Product Details</h1>
          <div className="text-black mx-auto pb-4 border-2 border-gray rounded-lg border-r-4 overflow-hidden shadow-lg ">
            <div className="max-w-[500px] ">
              <div className="mx-auto pt-6 pl-6 pr-6 pb-0">
                <img
                  className="prod-img mx-auto"
                  src={singleProduct.img}
                  alt="product image"
                />
              </div>
              <div className="align-middle">
                <h4 className="text-black font-bold text-xl mb-2">
                  {singleProduct.title}
                </h4>
                <p className="text-black text-base">
                  {singleProduct.description}
                </p>
                <h3 className="text-black text-base">${singleProduct.price}</h3>
              </div>
            </div>
            <div className="px-6 mt-4 pt-8 pb-2 mb-4">
              <button
                // onClick={deleteProduct}
                onClick={(id) => deleteProduct(singleProduct)}
                className="rounded-full bg-black"
              >
                Delete
              </button>
              <br />
              <br />
            </div>
          </div>
          <div className="px-6 mt-4 pt-8 pb-2">
           
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SingleProduct;
