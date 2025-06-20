import React, { createContext, useState, useEffect } from "react";
import "./styles/global.css";
import axios from "axios";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import GetProduct from "./pages/GetProduct";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Orders from "./pages/Orders";

export const ProdContext = createContext();

function App() {
  const localData = localStorage.getItem("products");
  const data = JSON.parse(localData) || [];

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState();

  return (
    <ProdContext.Provider value={[products, setProducts]}>
      <>
        <Header />
        <Routes>
          <Route element={<MainLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/delete/:id" element={<SingleProduct />} />
          <Route path="/products/:id" element={<GetProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </>
    </ProdContext.Provider>
  );
}

export default App;
