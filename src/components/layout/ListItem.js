import React from "react";

export default function ListItem({ itemname, className, children }) {
  return (
    <>
      <li className={className}>
        {itemname} {children}
      </li>
    </>
  );
}
