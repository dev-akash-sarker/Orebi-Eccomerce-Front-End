import React from "react";

export default function Badge({ title }) {
  return (
    <span className="bg-primary capitalize inline-block text-white font-bold py-2 px-8 absolute top-5 left-5">
      {title}
    </span>
  );
}
