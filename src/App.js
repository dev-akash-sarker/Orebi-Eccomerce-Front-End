import Image from "./components/layout/image";
import Flex from "./components/layout/Flex";
import "./index.css";
import List from "./components/layout/List";
import ListItem from "./components/layout/ListItem";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <nav>
        <div className="max-w-container mx-auto p-2.5">
          <Flex className="items-center" hxm="hello">
            <div className="w-3/12">
              <Image imagesrc="./assets/logo.png" />
            </div>

            <div className="w-9/12">
              <HiBars3
                className="block lg:hidden ml-auto"
                onClick={() => setShow(!show)}
              />
              {show && (
                <List className="flex justify-end gap-x-10">
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
              )}
            </div>
          </Flex>
        </div>
      </nav>
    </div>
  );
}

export default App;
