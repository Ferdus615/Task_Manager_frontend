"use client";

import Image from "next/image";
import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-0 m-auto w-120 h-150"
    >
      <div className="fixed w-120 flex justify-between p-5 bg-gray-950 rounded-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="border p-2 rounded-full bg-blue-950 border-blue-800 hover:cursor-pointer"
        >
          <Image src="/crossMark.svg" width={10} height={10} alt="Close" />
        </button>
      </div>
      <div
        className="p-5 mt-12 h-140 overflow-auto rounded-lg bg-gray-950 scrollbar-none scrollbar-none 
        [&::-webkit-scrollbar]:display-none 
        [-ms-overflow-style:none] 
        [scrollbar-width:none]"
      >
        <p className="text-sm font-light">{desc}</p>
      </div>
    </div>
  );
};
export default TaskDetailsModal;
