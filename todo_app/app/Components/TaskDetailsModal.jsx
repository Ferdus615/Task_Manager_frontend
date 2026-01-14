"use client";

import Image from "next/image";
import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col absolute inset-0 m-auto w-150 h-180 border-2 border-[#444444] rounded-lg bg-[#1e1f20] overflow-hidden"
    >
      <div className="flex justify-between p-5 border-b border-[#444444]">
        <h2 className="text-xl font-bold">{title}</h2>
        <div>
          <button
            onClick={onClose}
            className="border p-2 rounded-full hover:cursor-pointer"
          >
            <Image src="/crossMark.svg" width={10} height={10} alt="Close" />
          </button>
        </div>
      </div>
      <div
        className="p-5 flex-1 overflow-auto scrollbar-none 
        [&::-webkit-scrollbar]:hidden 
        [-ms-overflow-style:none] 
        [scrollbar-width:none]"
      >
        <p className="text-sm font-light">{desc}</p>
      </div>
    </div>
  );
};
export default TaskDetailsModal;
