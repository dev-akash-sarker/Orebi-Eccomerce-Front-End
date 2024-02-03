import React, { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function LeftSidebarItem({ children, subdropDown, title }) {
  // eslint-disable-next-line no-unused-vars
  const [drop, setDrop] = useState(subdropDown);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className="flex justify-between border-b border-[#f0f0f0] items-center cursor-pointer "
          >
            <h3 className=" font-dmsans py-5 font-normal text-base text-two">
              {title}
            </h3>
            {show ? (
              <AiOutlineMinus className=" text-two" />
            ) : (
              <AiOutlinePlus className=" text-two" />
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center border-b border-[#f0f0f0] cursor-pointer">
            <h3 className=" font-dmsans py-5 font-normal text-base text-two">
              {title}
            </h3>
          </div>
        )}

        {show && (
          <div className="pl-3 text-two py-5 border-b border-[#f0f0f0]">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
