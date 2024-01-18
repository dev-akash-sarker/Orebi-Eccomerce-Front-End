import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./image";
import { Link } from "react-router-dom";

export default function Advertisement() {
  return (
    <>
      <Container className="my-8 md:my-[140px]">
        <Flex className="flex gap-x-4 md:gap-x-6 lg:gap-x-10">
          <div className="w-2/4">
            <Link to="#">
              <Image imagesrc="./assets/Ad_1.png" width="" alt="ad1" />
            </Link>
          </div>
          <div className="w-2/4 flex flex-col gap-y-3 md:gap-y-6 lg:gap-y-10">
            <Link to="#">
              <Image imagesrc="./assets/Ad_2.png" width="" alt="ad1" />
            </Link>
            <Link to="#">
              <Image imagesrc="./assets/Ad_3.png" width="" alt="ad1" />
            </Link>
          </div>
        </Flex>
      </Container>
    </>
  );
}
