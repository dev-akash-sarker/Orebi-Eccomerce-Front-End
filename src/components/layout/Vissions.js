import React from "react";

export default function Vissions({ title, description }) {
  return (
    <div>
      <h4 className="text-primary text-left font-dmsans font-bold text-[25px] leading-[36px]">
        {title}
      </h4>
      <p className=" font-dmsans mt-3 text-base leading-7 text-left text-[#767676]">
        {description}
      </p>
    </div>
  );
}
