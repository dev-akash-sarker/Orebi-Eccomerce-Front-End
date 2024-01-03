import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./image";
import { MdLocalShipping } from "react-icons/md";
import { FaUndo } from "react-icons/fa";

export default function AdditionalInfo() {
  return (
    <div className="border-y-2 border-solid border-[#F0F0F0] mt-8">
      <Container>
        <Flex className="flex justify-between pt-[22px] pb-[21px]">
          <Flex className="flex items-center gap-3 md:gap-4">
            <Image imagesrc="./assets/two.png" alt="2" />
            <p className="font-dmsans font-normal text-[10px] md:text-base text-[#6d6d6d]">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex items-center gap-3 md:gap-4">
            <MdLocalShipping fontSize="25px" />
            <p className="font-dmsans font-normal text-[10px] sm:text-base text-[#6d6d6d]">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex items-center gap-3 md:gap-4">
            <FaUndo fontSize="25px" />
            <p className="font-dmsans font-normal text-[10px] md:text-base text-[#6d6d6d]">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
