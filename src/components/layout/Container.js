import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={className + " max-w-container mx-auto p-2.5"}>
      {children}
    </div>
  );
}
