import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./image";
import { Link } from "react-router-dom";

export default function Advertisement() {
  return (
    <>
      {/* <div>
            <Image imagesrc="./assets/Ad_1.png" alt="ad1" />
          </div>
          <div className="col-span-1">
            <Image imagesrc="./assets/Ad_2.png" alt="ad1" />
          </div>
          <div className="col-span-1 bg-red-500">
            <Image imagesrc="./assets/Ad_3.png" alt="ad1" />
          </div> */}
      <Container>
        {/* <Flex className="flex gap-x-5 md:gap-x-10">
          <div className="w-2/4">
            <Link to="#">
              <Image imagesrc="./assets/Ad_1.png" alt="ad1" className="block" />
            </Link>
          </div>
          <div className="w-2/4">
            <Link to="#">
              <Image imagesrc="./assets/Ad_2.png" alt="ad1" />
            </Link>
            <Link to="#" className="mt-2 md:mt-10 inline-block">
              <Image imagesrc="./assets/Ad_3.png" alt="ad1" />
            </Link>
          </div>
        </Flex> */}
        <Flex className="grid grid-cols-12 grid-rows-4 gap-10">
          <div className="col-span-6 row-span-4">
            <Link to="#">
              <Image imagesrc="./assets/Ad_2.png" alt="ad1" />
            </Link>
          </div>
          <div className="col-span-6 row-span-2 col-start-7">
            <Image imagesrc="./assets/Ad_2.png" alt="ad1" />
          </div>
          <div className="col-span-6 row-span-2 col-start-7 row-start-3">
            <Image imagesrc="./assets/Ad_3.png" alt="ad1" />
          </div>
        </Flex>
      </Container>
    </>
  );
}
