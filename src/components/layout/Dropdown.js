import React from "react";

export default function Dropdown({
  children,
  className,
  title,
  titleIcon,
  dropref,
}) {
  return (
    <div className={className} ref={dropref}>
      <p className="flex items-center gap-2 font-dmsans text-sm font-normal">
        {titleIcon} <span className="hidden lg:inline-block">{title}</span>
      </p>
      {children}
    </div>
  );
}
