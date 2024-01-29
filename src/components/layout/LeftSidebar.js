import React from "react";

import SidebarContent from "./SidebarContent";
export default function LeftSidebar() {
  return (
    <div>
      <SidebarContent title="Shop By Category" dropDown={false} />
      <SidebarContent title="Shop By Color" dropDown={true} />
      {/* <SidebarContent title="Shop By Brand" dropDown={false} /> 
      <SidebarContent title="Shop By Price" dropDown={false} /> */}
    </div>
  );
}
