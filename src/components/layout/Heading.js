import React from "react";

export default function Headings({ title, className, children }) {
  return (
    <>
      <h2 className={className + " font-dmsans mb-12 font-bold"}>
        {title} {children}
      </h2>
    </>
  );
}
