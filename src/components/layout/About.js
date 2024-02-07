import React from "react";
import Mypath from "./Mypath";
import Flex from "./Flex";
import Image from "./image";
import Container from "./Container";
import Vissions from "./Vissions";

export default function About() {
  return (
    <>
      <Container>
        <Mypath hometitle="Home" />
        <Flex className="flex flex-col md:flex-row gap-3 md:gap-x-10 mt-9 md:mt-32">
          <div className="w-full md:w-1/2 relative">
            <Image width="100%" height="100%" imagesrc="./assets/cap.png" />
            <div className=" absolute bottom-6 md:bottom-14 left-1/2 -translate-x-1/2">
              <button className=" px-10 py-6 md:px-24 md:py-7 pb-[27px] bg-black text-white font-dmsans font-bold text-base">
                Our Brands
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image width="100%" height="100%" imagesrc="./assets/cap.png" />
            <div className=" absolute bottom-6 md:bottom-14 left-1/2 -translate-x-1/2">
              <button className=" px-10 py-6 md:px-24 md:py-7 pb-[27px] bg-black text-white font-dmsans font-bold text-base">
                Our Brands
              </button>
            </div>
          </div>
        </Flex>
        <h3 className=" font-dmsans mt-32 font-normal text-[39px] leading-[52px] text-primary">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h3>
        <Flex className="flex flex-col md:flex-row mt-[118px] gap-4">
          <Vissions
            title="Our Vision"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Vissions
            title="Our Story"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          />
          <Vissions
            title="Our Brands"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          />
        </Flex>
      </Container>
    </>
  );
}
