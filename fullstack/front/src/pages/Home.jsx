import React from "react";
import { Link } from "react-router-dom";
// import "../styles/global.css";
import ProductsList from "./ProductsList";
import Orders from "./Orders";

function Home() {
  return (
    <>
      <div className="bg-slate-500 flex flex-row w-full h-full">
      </div>
      <ProductsList />
      <Orders/>
    </>
  );
}

export default Home;
