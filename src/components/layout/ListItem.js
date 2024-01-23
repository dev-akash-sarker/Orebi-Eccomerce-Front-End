import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ itemname, className, children }) {
  return (
    <>
      <li className={className + " capitalize"}>
        {itemname === "Home" || itemname === "home" ? (
          <Link to="/">
            {itemname} {children}
          </Link>
        ) : (
          <Link to={"/" + itemname}>
            {itemname} {children}
          </Link>
        )}
      </li>
    </>
  );
}
