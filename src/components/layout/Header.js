import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import Barsii from "../icons/barsii.js";
import List from "./List.js";
import ListItem from "./ListItem.js";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [show, setShow] = useState(false);
  const [accountshow, setAccountshow] = useState(false);
  const [cart, setCart] = useState(false);
  const ref = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (accountRef.current.contains(e.target)) {
        setAccountshow(true);
      } else {
        setAccountshow(false);
      }
    });
  }, []);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target)) {
        setCart(true);
      } else {
        setCart(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Dropdown
              title="Shop by Category"
              titleIcon={<Barsii />}
              className="relative"
              dropref={ref}
            >
              {show && (
                <List className="absolute w-[263px] bg-primary text-white top-6 left-0 transition-all ease-linear">
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

          <h1>ssd</h1>
          <div className="flex gap-5">
            <Dropdown
              titleIcon={
                <>
                  <FaUser /> <FaCaretDown />
                </>
              }
              className="relative"
              dropref={accountRef}
            >
              {accountshow && (
                <List className="w-[200px] absolute top-6 right-0 shadow-md transition-all ease-in duration-300">
                  <ListItem
                    itemname="My Account"
                    className="hover:bg-white hover:text-black bg-primary text-white text-sm font-normal pt-[17px] pb-[15px] hover:font-bold text-center capitalize lg:my-0 transition-all ease-in duration-300"
                  />
                  <ListItem
                    itemname="Log Out"
                    className="hover:bg-white hover:text-black bg-primary text-white text-sm font-normal pt-[17px] pb-[15px] hover:font-bold text-center capitalize lg:my-0 transition-all ease-in duration-300"
                  />
                </List>
              )}
            </Dropdown>
            <Dropdown
              titleIcon={
                <>
                  <FaShoppingCart />
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
                  <div className="w-[358px] absolute bg-[#F5F5F3] top-6 right-0 shadow-md">
                    <div className="px-5 py-5 flex gap-5 items-center">
                      <div className="w-[80px] h-[80px] bg-[#D8D8D8]"></div>
                      <div>
                        <h6>Black Smart Watch</h6>
                        <p>$44.00</p>
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
