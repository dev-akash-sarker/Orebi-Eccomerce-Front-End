import React from "react";
import SidebarContent from "./SidebarContent";
import { category, colors, brands, prices } from "../../data/data";

export default function LeftSidebar() {
  return (
    <div>
      <SidebarContent
        title="Shop By Category"
        dropDown={false}
        data={category}
      />
      <SidebarContent title="Shop By Color" dropDown={true} data={colors} />
      <SidebarContent title="Shop By Brand" dropDown={true} data={brands} />
      <SidebarContent title="Shop By Price" dropDown={false} data={prices} />

      {/* <SidebarContent title="Shop By Brand" dropDown={true} data={brands} />
      <SidebarContent title="Shop By Price" dropDown={true} data={prices} /> */}
      {/* <SidebarContent title="Shop By Brand" dropDown={false} /> 
      <SidebarContent title="Shop By Price" dropDown={false} /> */}
    </div>
  );
}
