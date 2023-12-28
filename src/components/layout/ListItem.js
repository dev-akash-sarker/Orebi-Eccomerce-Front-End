import React from "react";

export default function ListItem({ itemname, className, children }) {
  return (
    <>
      <li className={className + " my-2.5 lg:my-2.5"}>
        {itemname} {children}
      </li>
    </>
  );
}
