import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import Barsii from "../icons/barsii.js";
import List from "./List.js";
import ListItem from "./ListItem.js";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Dropdown
              title="Shop by Category"
              titleIcon={<Barsii />}
              className="relative"
              onClick={() => setShow(!show)}
            >
              {show && (
                <List className="absolute w-[263px] bg-black text-white top-6 left-0 transition-all ease-linear">
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all"
                    itemname="hello"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all"
                    itemname="hello"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all"
                    itemname="hello"
                  />
                  <ListItem
                    className="px-5 py-4 capitalize font-dmsans font-normal text-sm text-white opacity-[70%] hover:opacity-[100%] hover:ml-2 transition-all"
                    itemname="hello"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <h1>ssd</h1>
          <h1>ssd</h1>
        </Flex>
      </Container>
    </div>
  );
}
