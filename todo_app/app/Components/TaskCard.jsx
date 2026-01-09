"use client";

import Image from "next/image";
import React from "react";

const TaskCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col border-2 border-blue-950 rounded-lg p-3 w-60 max-h-50 overflow-hidden">
      <span className="text-lg font-medium mb-2">{title}</span>
      <span className="text-sm font-light mb-4 text-zinc-400">{desc}</span>
      <div className="flex pt-3 gap-7">
        <button className="hover:cursor-pointer hover:scale-110 transition duration-200">
          <Image src="/done.svg" width={20} height={20} alt="completed" />
        </button>
        <button className="hover:cursor-pointer hover:scale-110 transition duration-200">
          <Image src="/archive.svg" width={22} height={20} alt="completed" />
        </button>
        <button className="hover:cursor-pointer hover:scale-110 transition duration-200">
          <Image src="/trash.svg" width={18} height={20} alt="completed" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
