import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
