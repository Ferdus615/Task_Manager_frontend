"use client";

import Image from "next/image";
import React from "react";

const TaskCard = ({
  id,
  title,
  desc,
  isCompleted,
  onCompleted,
  onArchived,
  onDeleted,
  onPermanentDelete,
}) => {
  return (
    <div
      className={`flex flex-col border-2 rounded-lg p-3 w-60 ${
        isCompleted
          ? "bg-blue-500/20 border-blue-800"
          : "bg-blue-900/20 border-blue-950"
      }`}
    >
      <div className="flex flex-col max-h-60 overflow-hidden">
        <span className="text-lg font-medium mb-2">{title}</span>
        <span className="text-sm font-light mb-4 text-zinc-400">{desc}</span>
      </div>
      <div className="flex pt-2 gap-7">
        {onCompleted && (
          <button
            onClick={() => onCompleted(id)}
            title="Complete task"
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/done.svg" width={20} height={20} alt="completed" />
          </button>
        )}

        {onArchived && (
          <button
            onClick={() => onArchived(id)}
            title="Archive task"
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/archive.svg" width={22} height={20} alt="Archive" />
          </button>
        )}

        {onDeleted && (
          <button
            onClick={() => onDeleted(id)}
            title="Delete task"
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/trash.svg" width={18} height={20} alt="Delete" />
          </button>
        )}

        {onPermanentDelete && (
          <button
            onClick={() => onPermanentDelete(id)}
            title="Delete permanently"
            className="group hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image
              src="/delete.svg"
              width={18}
              height={20}
              alt="Permanent Delete"
            ></Image>
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
