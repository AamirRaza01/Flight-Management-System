import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Generals/Header";
import Footer from "./components/Generals/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;