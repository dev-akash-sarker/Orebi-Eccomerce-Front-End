import React, { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function LeftSidebarItem({
  children,
  subdropDown,
  title,
  color,
  varient,
}) {
  // eslint-disable-next-line no-unused-vars
  const [drop, setDrop] = useState(subdropDown);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className={
              show
                ? "flex justify-between border-b border-[transparent] items-center cursor-pointer "
                : "flex justify-between border-b border-[#f0f0f0] items-center cursor-pointer "
            }
          >
            <h3
              className={
                varient
                  ? " font-dmsans py-5 font-normal text-base text-two relative pl-5"
                  : " font-dmsans py-5 font-normal text-base text-two relative"
              }
            >
              {title}
            </h3>
            {show ? (
              <AiOutlineMinus className=" text-two" />
            ) : (
              <AiOutlinePlus className=" text-two" />
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center border-b border-[#f0f0f0] cursor-pointer ">
              <h3
                className={
                  varient
                    ? " font-dmsans py-5 font-normal text-base text-two relative pl-5"
                    : " font-dmsans py-5 font-normal text-base text-two relative"
                }
              >
                {title}
                <div
                  className=" absolute w-[11px] h-[11px] rounded-full top-1/2 left-0 -translate-y-1/2"
                  style={{ background: varient }}
                ></div>
              </h3>
            </div>
          </>
        )}

        {show && (
          <div className="pl-0 text-two py-0 border-b border-[#f0f0f0]">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
