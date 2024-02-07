import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import LeftSidebarItem from "./LeftSidebarItem";
export default function SidebarContent({ dropDown, title, data }) {
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
            {data.map((item) => (
              <>
                <LeftSidebarItem
                  title={item.name}
                  varient={item.varient}
                  subdropDown={item.subcategory ? true : false}
                  data={data}
                >
                  {item.subcategory &&
                    item.subcategory.map((items) => (
                      <>
                        <div className="border-b border-[#f0f0f0] last:border-[transparent]">
                          <h1 className="font-dmsans py-5 font-normal text-base text-two relative">
                            {items.name ? items.name : items.range}
                          </h1>
                          <div
                            className=" absolute w-[11px] h-[11px] rounded-full top-1/2 left-0 -translate-y-1/2"
                            style={{ background: item.varient }}
                          ></div>
                        </div>
                      </>
                    ))}
                </LeftSidebarItem>
              </>
            ))}
          </div>
        )}
        {!drop && (
          <div>
            {data.map((item, i) => (
              <LeftSidebarItem
                title={item.name}
                key={i}
                subdropDown={item.subcategory ? true : false}
              >
                {item.subcategory &&
                  item.subcategory.map((items, j) => (
                    <>
                      <div
                        key={j}
                        className="border-b border-[#f0f0f0] last:border-[transparent]"
                      >
                        <h1 className="font-dmsans py-5 font-normal text-base text-two relative">
                          {items.name}
                        </h1>
                      </div>
                    </>
                  ))}
              </LeftSidebarItem>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
