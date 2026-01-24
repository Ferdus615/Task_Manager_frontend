"use client";

import Image from "next/image";
import React, { useState } from "react";
import TaskContent from "./texteditor/TaskContent";
import { useTasks } from "../context/TaskContext";
import Tiptap from "./texteditor/Tiptap";

const TaskDetailsModal = ({ id, title, desc, onClose }) => {
  const { updateTask } = useTasks();

  const [editTitle, setEditTitle] = useState(title);
  const [editDesc, setEditDesc] = useState(desc);

  const handleSave = () => {
    updateTask(id, { title: editTitle.trim(), desc: editDesc });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#272835]/70 backdrop-blur-xs z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col absolute inset-0 m-auto w-[40%] h-fit max-h-[90%]
         border-2 border-[#8b8b93] rounded-lg bg-[#272835] text-zinc-300 overflow-hidden"
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
          <TaskContent content={desc} editable onChange={setEditDesc} />
        </div>

        <div className="">
          <button onClick={onClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default TaskDetailsModal;
