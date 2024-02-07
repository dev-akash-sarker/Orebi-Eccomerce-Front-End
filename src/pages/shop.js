import React, { useState } from "react";
import Container from "../components/layout/Container";
import Mypath from "../components/layout/Mypath";
import Flex from "../components/layout/Flex";
import { IoGrid } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFilterCircleFill } from "react-icons/bs";
import Paginations from "../components/layout/Paginations";
import SelectLable from "../components/layout/SelectLable";
// eslint-disable-next-line no-unused-vars
import ProductLeftsidebar from "../components/layout/ProductLeftsidebar";
import LeftSidebar from "../components/layout/LeftSidebar";
export default function Shop() {
  const [open, setOpen] = useState(false);
  const [itemPerPage, setItemPerPage] = useState(12);
  const showpagination = (e) => {
    setItemPerPage(+e.target.value);
  };

  const openmycats = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const closemycats = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <>
      <Container>
        <Mypath hometitle="home" />
        <Flex className="flex gap-x-9 mt-32 relative">
          <Flex
            className={
              open
                ? "absolute top-0 left-0 z-50 w-full bg-gray-200 p-4 pt-8 sm:pt-0 text-black sm:bg-transparent sm:static sm:w-1/2"
                : "hidden w-full sm:w-1/4 md:block"
            }
          >
            {/* my way to make the left part  */}
            {/* <ProductLeftsidebar /> */}
            {/* Our mentor way to make the left part */}
            {open && (
              <IoIosCloseCircle
                className="sm:hidden text-black text-2xl absolute right-4 top-3"
                onClick={closemycats}
              />
            )}
            <LeftSidebar />
          </Flex>
          <Flex className="w-full md:w-3/4 relative">
            <Flex className=" md:flex justify-between items-center mb-3">
              <Flex className="flex gap-5">
                <div className="inline-block pl-[11px] pr-[10px] pt-[12px] pb-[10px] bg-black">
                  <IoGrid color="#fff" />
                </div>
              </Flex>

              <Flex className="flex gap-4 md:justify-start md:gap-3 mt-3 md:mt-0">
                <div className="flex item-center flex-col justify-end mb-3">
                  <BsFilterCircleFill
                    className="inline-block text-2xl md:hidden text-[#767676]"
                    onClick={openmycats}
                  />
                </div>
                <div className="md:flex md:justify-start md:items-center ">
                  <SelectLable labelname="Sort by" />
                  <select className="w-[120px] md:w-[239px] border border-[#f0f0f0] text-gray-900 text-sm rounded-lg focus:border-black-500 block p-2.5">
                    <option
                      defaultValue="Featured"
                      className="font-dmsans focus:bg-red-500 hover:bg-red-500 font-normal text-base rounded-none"
                    >
                      Featured
                    </option>

                    <option
                      className="font-dmsans font-normal text-base"
                      value="US"
                    >
                      United States
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="CA"
                    >
                      Canada
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="FR"
                    >
                      France
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="DE"
                    >
                      Germany
                    </option>
                  </select>
                </div>
                <div className="md:flex md:justify-start md:items-center">
                  <SelectLable labelname="show" />
                  <select
                    className="w-[65px] md:w-[139px] border border-[#f0f0f0] text-gray-900 text-sm rounded-lg focus:border-black-500 block p-2.5"
                    onClick={showpagination}
                  >
                    <option
                      defaultValue="12"
                      className="font-dmsans focus:bg-red-500 hover:bg-red-500 font-normal text-base rounded-none"
                    >
                      12
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="24"
                    >
                      24
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="36"
                    >
                      36
                    </option>
                    <option
                      className="font-dmsans font-normal text-base"
                      value="48"
                    >
                      48
                    </option>
                  </select>
                </div>
              </Flex>
            </Flex>

            <Paginations itemsPerPage={itemPerPage} />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
