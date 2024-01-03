import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import Barsii from "../icons/barsii.js";
import List from "./List.js";
import ListItem from "./ListItem.js";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Search from "./Search.js";

export default function Header() {
  const [show, setShow] = useState(false);
  const [accountshow, setAccountshow] = useState(false);
  const [cart, setCart] = useState(false);
  const ref = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // dropdown category
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
      // mycount dropdown
      if (accountRef.current.contains(e.target)) {
        setAccountshow(true);
      } else {
        setAccountshow(false);
      }
      // cart dropdown
      if (cartRef.current.contains(e.target)) {
        setCart(true);
      } else {
        setCart(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between items-center">
          <div>
            <Dropdown
              title="Shop by Category"
              titleIcon={<Barsii />}
              className="relative"
              dropref={ref}
            >
              {show && (
                <List className="absolute z-10 w-[263px] bg-primary text-white top-6 left-0 transition-all ease-linear">
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Bags"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal hover:font-bold text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all ease-in duration-300"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>

          <div className="w-[601px] relative mx-4 lg:mx-0">
            <Search
              className="w-full px-5 py-4 placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 right-5" />
          </div>

          <div className="flex gap-2 md:gap-5 items-center">
            <Dropdown
              titleIcon={
                <>
                  <FaUser className="text-md md:text-xl" />{" "}
                  <FaCaretDown className="text-md md:text-xl" />
                </>
              }
              className="relative"
              dropref={accountRef}
            >
              {accountshow && (
                <List className="w-[200px] absolute z-20 top-6 right-0 shadow-md transition-all ease-in duration-300">
                  <ListItem
                    itemname="My Account"
                    className="hover:bg-primary hover:text-white bg-white text-black border-b border-solid border-[#f0f0f0] text-sm font-normal pt-[17px] pb-[15px] hover:font-bold text-center capitalize lg:my-0 transition-all ease-in duration-300"
                  />
                  <ListItem
                    itemname="Log Out"
                    className="hover:bg-primary hover:text-white bg-white text-black border-b border-solid border-[#f0f0f0] text-sm font-normal pt-[17px] pb-[15px] hover:font-bold text-center capitalize lg:my-0 transition-all ease-in duration-300"
                  />
                </List>
              )}
            </Dropdown>
            <Dropdown
              titleIcon={
                <>
                  <FaShoppingCart className="text-md md:text-xl" />
                </>
              }
              className="relative mr-3"
              dropref={cartRef}
            >
              <p className="font-dmsans w-4 h-4 text-[12px] shadow-lg bg-[#D8D8D8] rounded-full flex justify-center items-center absolute -top-2 left-2">
                1
              </p>
              {cart && (
                <>
                  <div className="w-[358px] absolute z-20 bg-[#F5F5F3] top-6 right-0 shadow-inner">
                    <div className="px-5 py-5 flex justify-between items-center border-b-gray-300">
                      <div className="flex justify-between items-center gap-5">
                        <div className="w-[80px] h-[80px] bg-[#D8D8D8] border border-solid border-gray-200 overflow-hidden">
                          <img src="./assets/cartImage.png" alt="cartImage" />
                        </div>
                        <div>
                          <h6 className="font-bold text-sm font-dmsans">
                            Black Smart Watch
                          </h6>
                          <p className="font-bold text-sm font-dmsans">
                            $44.00
                          </p>
                        </div>
                      </div>
                      <div>
                        <FaXmark />
                      </div>
                    </div>
                    <div className="px-5 py-5 bg-white shadow-md">
                      <p className="font-normal text-[16px] font-dmsans text-[#767676]">
                        Subtotal:{" "}
                        <span className="font-bold text-primary">$44.00</span>
                      </p>
                      <div className="flex justify-between mt-[13px]">
                        <button className="pl-[41px] py-4 pr-10 bg-white border border-black font-dmsans text-sm font-bold hover:bg-black hover:text-white transition-all ">
                          View Cart
                        </button>
                        <button className="pl-[41px] py-4 pr-10 bg-white border border-black font-dmsans text-sm font-bold hover:bg-black hover:text-white transition-all ">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Dropdown>
          </div>
        </Flex>
      </Container>
    </div>
  );
}
