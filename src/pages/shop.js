import React, { useState } from "react";
import Container from "../components/layout/Container";
import Mypath from "../components/layout/Mypath";
import Flex from "../components/layout/Flex";
import { IoGrid } from "react-icons/io5";
import Paginations from "../components/layout/Paginations";
import SelectLable from "../components/layout/SelectLable";
import ProductLeftsidebar from "../components/layout/ProductLeftsidebar";
export default function Shop() {
  const [itemPerPage, setItemPerPage] = useState(12);
  const showpagination = (e) => {
    setItemPerPage(+e.target.value);
  };

  return (
    <>
      <Container>
        <Mypath hometitle="home" istitle="true" />
        <Flex className="flex gap-x-9 mt-32">
          <Flex className=" w-1/4">
            <ProductLeftsidebar />
          </Flex>
          <Flex className=" w-3/4 relative">
            <Flex className=" md:flex justify-between items-center mb-3">
              <Flex className="flex gap-5">
                <div className="inline-block pl-[11px] pr-[10px] pt-[12px] pb-[10px] bg-black">
                  <IoGrid color="#fff" />
                </div>
              </Flex>
              <Flex className=" md:flex md:justify-start md:gap-3">
                <div className="md:flex md:justify-start md:items-center ">
                  <SelectLable labelname="Sort by" />
                  <select
                    id="countries"
                    class="w-[239px] border border-[#f0f0f0] text-gray-900 text-sm rounded-lg focus:border-black-500 block p-2.5"
                  >
                    <option
                      selected
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
                    id="countries"
                    class="w-[139px] border border-[#f0f0f0] text-gray-900 text-sm rounded-lg focus:border-black-500 block p-2.5"
                    onClick={showpagination}
                  >
                    <option
                      selected
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
