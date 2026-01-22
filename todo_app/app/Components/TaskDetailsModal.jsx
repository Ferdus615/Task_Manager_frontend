"use client";

import Image from "next/image";
import React from "react";
import TaskContent from "./texteditor/TaskContent";
import { EditorContent } from "@tiptap/react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#272835]/70 backdrop-blur-sm z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col absolute inset-0 m-auto w-fit h-fit max-w-[40%] max-h-[90%]
         border-2 border-[#26242d] rounded-lg bg-[#121220] text-zinc-300 overflow-hidden"
      >
        <div className="flex gap-10 justify-between p-5 border-b border-[#272835]">
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
          {/* <EditorContent content={desc} /> */}
          <TaskContent content={desc} />
          {/* <p className="text-sm font-light">{desc}</p> */}
        </div>
      </div>
    </div>
  );
};
export default TaskDetailsModal;
