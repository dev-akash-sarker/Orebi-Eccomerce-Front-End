import React from "react";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
