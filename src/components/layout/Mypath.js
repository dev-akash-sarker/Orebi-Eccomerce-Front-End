import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import Headings from "./Heading";
export default function Mypath({ hometitle }) {
  const location = useLocation();
  const pathname = location.pathname.substring(1);

  return (
    <div>
      <Headings className="text-[49px] mb-3 capitalize" title={pathname} />

      <p className=" flex justify-start items-center gap-x-3 font-normal font-dmsans text-xs text-[#767676]">
        <Link className=" capitalize" to="/">
          {hometitle}
        </Link>
        <RxCaretRight />
        <Link className=" capitalize" to={"/" + pathname}>
          {pathname}
        </Link>
      </p>
    </div>
  );
}
