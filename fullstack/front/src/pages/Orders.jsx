import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/global.css";
import toast from "react-hot-toast";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error("error");
      });
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [setOrders, orders]);

  return (
    <div
      className="w-full flex flex-col mx-auto justify-center"
      style={{ paddingTop: "2rem" }}
    >
      <div className="max-w-[1440px] flex flex-col justify-center mx-auto sm: ml-8">
        <h1 className="text-black text-center">Orders</h1>
        <div className="max-w-[1440px] flex flex-row justify-start gap-4 flex-wrap mr-4 pr-4">
          {orders.map((order) => (
            // <Link key={order._id} to={`/orders/delete/${order._id}`}>Delete
            <div
              key={order._id}
              className="flex flex-row justify-between border-b-2 w-[50vw] mx-auto"
            >
              <div>{order.title}</div>
              <div>{order.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
