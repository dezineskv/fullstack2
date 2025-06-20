import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// use outlet for the routes from app
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
