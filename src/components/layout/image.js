import React from "react";

export default function Image({ imagesrc, alt }) {
  return (
    <>
      <img src={imagesrc} alt={alt} />
    </>
  );
}
