"use client";

import Image from "next/image";
import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-0 m-auto w-120 h-fit p-5 rounded-lg bg-gray-950"
    >
      <div className="flex justify-between pb-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="border p-2 rounded-full bg-blue-950 border-blue-800 hover:cursor-pointer"
        >
          <Image src="/crossMark.svg" width={10} height={10} alt="Close" />
        </button>
      </div>
      <p className="text-sm font-light">{desc}</p>
    </div>
  );
};
export default TaskDetailsModal;
