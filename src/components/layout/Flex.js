import React from "react";

export default function Flex({ children, className }) {
  return <div className={className + " flex"}>{children}</div>;
}
