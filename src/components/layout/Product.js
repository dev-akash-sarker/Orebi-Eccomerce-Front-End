import React from "react";
import Image from "./image";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";

export default function Product({
  src,
  badge,
  productname,
  productprice,
  prouctcolor,
}) {
  return (
    <>
      <div>
        <div className="relative overflow-y-hidden group">
          <Image className="w-full" imagesrc={src} />
          {badge && <Badge title="new" />}
          <div className=" w-full absolute -bottom-[44%] lg:max-xl:-bottom-[75%] group-hover:bottom-0 transition-all left-0 h-40 bg-white">
            <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4 mt-5">
              <p className="font-dmsans  cursor-pointer font-normal text-[10px] sm:text-base lg:max-xl:text-sm hover:font-bold text-[#767676] hover:text-primary ">
                Add to Wish List
              </p>
              <FaHeart className="text-base" />
            </Flex>
            <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4 mt-5">
              <p className="font-dmsans cursor-pointer font-normal text-[10px] sm:text-base lg:max-xl:text-sm hover:font-bold text-[#767676] hover:text-primary">
                Compare
              </p>
              <HiArrowPath className="text-base" />
            </Flex>
            <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4 mt-5">
              <p className="font-dmsans cursor-pointer font-normal text-[10px] sm:text-base lg:max-xl:text-sm hover:font-bold text-[#767676] hover:text-primary">
                Add to Cart
              </p>
              <FaShoppingCart className="text-base" />
            </Flex>
          </div>
        </div>
        <div>
          <Flex className=" mt-3 md:mt-6 flex justify-between items-center">
            <h3 className="font-dmsans font-bold sm:text-sm text-xl">
              {productname}
            </h3>
            {/* {productprice === "" ||
              (productprice !== undefined && (
                <p className="font-dmsans capitalize font-normal text-base leading-7 text-[#767676]">
                  ${productprice}
                </p>
              ))} */}
          </Flex>
          <p className="font-dmsans font-normal mt-3 text-base leading-7 text-[#767676]">
            {prouctcolor ? prouctcolor : ""}
          </p>
        </div>
      </div>
    </>
  );
}
