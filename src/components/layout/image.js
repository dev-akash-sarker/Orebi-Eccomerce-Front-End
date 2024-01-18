import React from "react";

export default function Image({ imagesrc, alt, width }) {
  return (
    <>
      <img src={imagesrc} width={width} alt={alt} />
    </>
  );
}
