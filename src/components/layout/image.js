import React from "react";

export default function Image({ imagesrc, alt, width, className }) {
  return (
    <>
      <img src={imagesrc} className={className} width={width} alt={alt} />
    </>
  );
}
