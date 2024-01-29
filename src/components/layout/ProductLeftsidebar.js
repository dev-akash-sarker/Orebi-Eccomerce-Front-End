import React from "react";
import Headings from "./Heading";
import { FaPlus, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Catstag = ({ tagname, to, className }) => {
  return (
    <>
      <div
        className={
          className +
          " pt-5 pb-[19px] text-base hover:text-primary transition-all text-[#767676] border-b border-[#f0f0f0] font-dmsans font-normal "
        }
      >
        <Link to={to}>{tagname}</Link>
      </div>
    </>
  );
};
const DetailExpend = ({ catsname, children }) => {
  return (
    <>
      <details>
        <summary className="list-none relative text-base text-[#767676] border-b border-[#f0f0f0] font-dmsans font-normal pt-5 pb-[19px]">
          {catsname}
          <div className=" absolute top-1/2 -translate-y-1/2 right-4">
            <FaPlus className="text-[#767676]" />
          </div>
        </summary>
        {children}
      </details>
    </>
  );
};

const Categoryes = () => {
  return (
    <>
      <div>
        <Headings title="Shop by Category" className="text-xl mb-5" />

        <DetailExpend catsname="Category 1">
          <Catstag className="pl-5" to="" tagname="Games" />
        </DetailExpend>
        <Catstag tagname="Category 2" />
        <DetailExpend catsname="Category 3">
          <Catstag className="pl-5" to="" tagname="Games" />
        </DetailExpend>
        <Catstag tagname="Category 4" />
        <Catstag tagname="Category 5" />
      </div>
    </>
  );
};

const ColorExpend = () => {
  return (
    <>
      <details>
        <summary className=" list-none">
          <Headings className="text-xl mb-[0px!important] pt-5 pb-[19px] relative">
            Shop by Color
            <div className=" absolute top-1/2 -translate-y-1/2 right-4">
              <FaCaretDown />
            </div>
          </Headings>
        </summary>
        <Catstag
          to=""
          className=" list-disc pl-6 relative before:w-[10px] before:h-[10px] before:absolute before:top-1/2  before:-translate-y-1/2 before:left-0 before:bg-black before:rounded-full"
          tagname="color 1"
        />
        <Catstag
          to=""
          className=" list-disc pl-6 relative before:w-[10px] before:h-[10px] before:absolute before:top-1/2  before:-translate-y-1/2 before:left-0 before:bg-[#FF8686] before:rounded-full"
          tagname="color 2"
        />
        <Catstag
          to=""
          className=" list-disc pl-6 relative before:w-[10px] before:h-[10px] before:absolute before:top-1/2  before:-translate-y-1/2 before:left-0 before:bg-[#7ED321] before:rounded-full"
          tagname="color 3"
        />
        <Catstag
          to=""
          className=" list-disc pl-6 relative before:w-[10px] before:h-[10px] before:absolute before:top-1/2  before:-translate-y-1/2 before:left-0 before:bg-[#B6B6B6] before:rounded-full"
          tagname="color 4"
        />
        <Catstag
          to=""
          className=" list-disc pl-6 relative before:w-[10px] before:h-[10px] before:absolute before:top-1/2  before:-translate-y-1/2 before:left-0 before:bg-[#15CBA5] before:rounded-full"
          tagname="color 5"
        />
      </details>
    </>
  );
};

const Colors = () => {
  return (
    <>
      <ColorExpend />
    </>
  );
};

const Brands = () => {
  return (
    <>
      <details>
        <summary className=" list-none">
          <Headings className="text-xl mb-[0px!important] pt-5 pb-[19px] relative">
            Shop by Brand
            <div className=" absolute top-1/2 -translate-y-1/2 right-4">
              <FaCaretDown />
            </div>
          </Headings>
        </summary>
        <Catstag tagname="Brand 1" />
        <Catstag tagname="Brand 2" />
        <Catstag tagname="Brand 3" />
        <Catstag tagname="Brand 4" />
        <Catstag tagname="Brand 5" />
      </details>
    </>
  );
};

const Prices = () => {
  return (
    <>
      <div>
        <Headings className="text-xl mb-[0!important] pt-5 pb-[19px] relative">
          Shop by Price
        </Headings>
        <Catstag tagname="$0.00 - $9.99" />
        <Catstag tagname="$10.00 - $19.99" />
        <Catstag tagname="$20.00 - $29.99" />
        <Catstag tagname="$30.00 - $39.99" />
        <Catstag tagname="$4.00 - $69.99" />
      </div>
    </>
  );
};

export default function ProductLeftsidebar() {
  return (
    <div>
      <Categoryes />
      <Colors />
      <Brands />
      <Prices />
    </div>
  );
}
