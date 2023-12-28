import React from "react";

export default function Dropdown({
  children,
  className,
  title,
  titleIcon,
  onClick,
}) {
  return (
    <div className={className} onClick={onClick}>
      <p className="flex items-center gap-4 font-dmsans text-sm font-normal">
        {titleIcon} {title}
      </p>
      {children}
    </div>
  );
}
