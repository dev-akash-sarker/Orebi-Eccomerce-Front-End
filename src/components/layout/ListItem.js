import React from "react";

export default function ListItem({ itemname, className }) {
  return (
    <>
      <li className={className + " my-2.5 lg:my-2.5"}>{itemname}</li>
    </>
  );
}
