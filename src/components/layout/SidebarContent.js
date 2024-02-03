import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import LeftSidebarItem from "./LeftSidebarItem";
export default function SidebarContent({ dropDown, title }) {
  // eslint-disable-next-line no-unused-vars
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(dropDown);
  return (
    <>
      <div className="mb-10">
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h3 className=" font-dmsans font-bold text-xl text-primary">
              {title}
            </h3>
            <GoTriangleDown />
          </div>
        ) : (
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className=" font-dmsans font-bold text-xl text-primary">
              {title}
            </h3>
          </div>
        )}

        {show && (
          <div>
            <LeftSidebarItem title="Color 1" subdropDown={false}>
              Samples 1
            </LeftSidebarItem>
            <LeftSidebarItem title="Color 2" subdropDown={false}>
              Samples 1
            </LeftSidebarItem>
            <LeftSidebarItem title="Color 3" subdropDown={false}>
              Samples 1
            </LeftSidebarItem>
            <LeftSidebarItem title="Color 4" subdropDown={false}>
              Samples 1
            </LeftSidebarItem>
            <LeftSidebarItem title="Color 5" subdropDown={false}>
              Samples 1
            </LeftSidebarItem>
          </div>
        )}
        {!drop && (
          <div>
            <LeftSidebarItem title="Category 1" subdropDown={true}>
              hello
            </LeftSidebarItem>
            <LeftSidebarItem title="Category 2" subdropDown={false}>
              hello
            </LeftSidebarItem>
            <LeftSidebarItem title="Category 3" subdropDown={true}>
              hello
            </LeftSidebarItem>
            <LeftSidebarItem title="Category 4" subdropDown={false}>
              hello
            </LeftSidebarItem>
            <LeftSidebarItem title="Category 5" subdropDown={false}>
              hello
            </LeftSidebarItem>
          </div>
        )}
      </div>
    </>
  );
}
