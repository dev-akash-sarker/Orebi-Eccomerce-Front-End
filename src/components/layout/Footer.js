import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
export default function Footer() {
  return (
    <>
      <div className=" bg-[#f5f5f3] mt-24">
        <Container className="pt-[55px] pb-[65px]">
          <Flex className="flex justify-between flex-wrap">
            <Flex className="mt-2 md:mt-0 w-[50%] md:w-auto">
              <h4 className=" font-dmsans text-sm md:text-base font-bold leading-6 text-[#262626] mb-4">
                Menu
              </h4>
              <Flex className=" list-none flex flex-col gap-[6px]">
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Journal
                  </Link>
                </li>
              </Flex>
            </Flex>
            <Flex className="mt-2 md:mt-0 w-[50%] md:w-auto">
              <h4 className=" font-dmsans text-sm md:text-base font-bold leading-6 text-[#262626] mb-4">
                SHOP
              </h4>
              <Flex className=" list-none flex flex-col gap-[6px]">
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Category 3
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Category 4
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Category 5
                  </Link>
                </li>
              </Flex>
            </Flex>
            <Flex className="mt-2 md:mt-0 w-[50%] md:w-auto">
              <h4 className=" font-dmsans text-sm md:text-base font-bold leading-6 text-[#262626] mb-4">
                Help
              </h4>
              <Flex className=" list-none flex flex-col gap-[6px]">
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Special E-shop
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Secure Payments
                  </Link>
                </li>
              </Flex>
            </Flex>
            <Flex className="mt-2 md:mt-0 flex flex-col gap-4 w-[50%] md:w-auto">
              <h4 className=" w-[130px] font-dmsans text-sm md:text-base font-bold leading-6 text-[#262626] ">
                (052) 611-5711 company@domain.com
              </h4>
              <Flex className=" list-none flex flex-col gap-[6px]">
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Special E-shop
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-sm font-normal leading-6 text-[#6d6d6d]"
                    to="#"
                  >
                    Secure Payments
                  </Link>
                </li>
              </Flex>
            </Flex>
            <Flex className="mt-4 md:mt-0 w-[50%] md:w-auto">
              <Link to="#">
                <Image imagesrc="./assets/OREBI.png" alt="orebi" />
              </Link>
            </Flex>
          </Flex>
        </Container>
        <Container>
          <Flex className="md:flex md:justify-between md:items-center text-center md:text-right pb-14">
            <Flex className="flex justify-center mb-3 md:mb-0 md:justify-start items-center gap-5">
              <Link to="#facebook" className=" inline-block">
                <FaFacebookF />
              </Link>
              <Link to="#linkedin" className=" inline-block">
                <FaLinkedinIn />
              </Link>
              <Link to="#insagram" className=" inline-block">
                <RiInstagramLine />
              </Link>
            </Flex>
            <div className="text-sm font-dmsans leading-6 font-normal text-[#6d6d6d]">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}
