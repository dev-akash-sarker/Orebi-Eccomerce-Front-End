import React from "react";

export default function SelectLable({ labelname }) {
  return (
    <div>
      <label className="block mr-2 mb-2 mt-1 capitalize text-sm font-dmsans font-medium text-gray-900 dark:text-white">
        {labelname + ":"}
      </label>
    </div>
  );
}
