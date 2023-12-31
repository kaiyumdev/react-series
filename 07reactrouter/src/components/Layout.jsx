/* eslint-disable no-unused-vars */
import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";

//using layout to showing header and footer everywhere
export const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
