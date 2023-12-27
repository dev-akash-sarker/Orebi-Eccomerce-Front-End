import React, { useEffect, useState } from "react";
import Image from "./image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { HiBars3 } from "react-icons/hi2";
export default function Navbar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    function scrollwidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    scrollwidth();
    window.addEventListener("resize", scrollwidth);
  }, []);
  return (
    <div>
      <nav>
        <div className="max-w-container mx-auto p-2.5">
          <Flex className="lg:flex lg:items-center" hxm="hello">
            <div className="lg:w-3/12">
              <Image imagesrc="./assets/logo.png" />
            </div>

            <div className="lg:w-9/12 w-full ">
              <HiBars3
                className="block lg:hidden ml-auto absolute right-2.5 top-2.5"
                onClick={() => setShow(!show)}
              />
              {show && (
                <div>
                  <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
                    <ListItem
                      className="font-dmsans text-sm font-regular hover:font-bold"
                      itemname="Home"
                    />
                    <ListItem
                      className="font-dmsans text-sm font-regular hover:font-bold"
                      itemname="About"
                    />
                    <ListItem
                      className="font-dmsans text-sm font-regular hover:font-bold"
                      itemname="Service"
                    />
                    <ListItem
                      className="font-dmsans text-sm font-regular hover:font-bold"
                      itemname="Contact"
                    />
                  </List>
                </div>
              )}
            </div>
          </Flex>
        </div>
      </nav>
    </div>
  );
}
