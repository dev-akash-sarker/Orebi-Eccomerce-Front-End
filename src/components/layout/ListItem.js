import React from "react";

export default function ListItem({ itemname, className }) {
  return (
    <>
      <li className={className}>{itemname}</li>
    </>
  );
}
