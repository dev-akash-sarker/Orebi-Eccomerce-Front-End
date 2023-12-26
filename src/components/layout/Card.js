import React from "react";

export default function Card(props) {
  const { title } = props;
  //   console.log("props", props.title);
  return <div>{title}</div>;
}
