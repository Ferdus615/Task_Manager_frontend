"use client";

import Image from "next/image";
import React, { use, useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";

const TaskCard = ({
  id,
  title,
  desc,
  isCompleted,
  isArchived,
  isDeleted,
  onCompleted,
  onArchived,
  onDeleted,
  onPermanentDelete,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAction = (e, callback) => {
    e.stopPropagation();
    callback(id);
  };

  return (
    <div
      onClick={() => setShowDetails(true)}
      className={`flex flex-col border-2 rounded-lg p-3 min-w-60 max-w-80 ${
        isCompleted
          ? "bg-blue-500/20 border-blue-800"
          : "bg-blue-900/20 border-blue-950"
      }`}
    >
      <div className="flex flex-col max-h-60 overflow-hidden">
        <span className="text-lg font-medium mb-2">{title}</span>
        <hr className="text-zinc-800 mb-2" />
        <span className="text-sm font-light mb-4 text-zinc-400">{desc}</span>
      </div>
      <div className="flex pt-3 gap-7">
        {onCompleted && (
          <button
            onClick={(e) => handleAction(e, onCompleted)}
            title={isCompleted ? "Incomplete task" : "Complete task"}
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/done.svg" width={20} height={20} alt="completed" />
          </button>
        )}

        {onArchived && (
          <button
            onClick={(e) => handleAction(e, onArchived)}
            title={isArchived ? "Unarchive task" : "Archive task"}
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/archive.svg" width={22} height={20} alt="Archive" />
          </button>
        )}

        {onDeleted && (
          <button
            onClick={(e) => handleAction(e, onDeleted)}
            title={isDeleted ? "Undo delete" : "Delete task"}
            className="hover:cursor-pointer hover:scale-110 transition duration-200"
          >
            <Image src="/trash.svg" width={18} height={20} alt="Delete" />
          </button>
        )}

        {onPermanentDelete && !confirmDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setConfirmDelete(true);
            }}
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

        {confirmDelete && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="flex flex-col gap-5 items-center absolute inset-0 m-auto w-fit h-fit border border-blue-900 p-6 rounded-md bg-blue-950/30 z-50">
              <div>
                <span className="font-normal text-sm">
                  Are you sure? You want to delete this!
                </span>
              </div>
              <div className="flex gap-5 mt-3">
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="border rounded-sm px-3 py-1 text-sm font-light bg-blue-950 text-zinc-300 border-blue-900 hover:cursor-pointer"
                >
                  Cancle
                </button>

                <button
                  onClick={() => {
                    onPermanentDelete(id);
                    setConfirmDelete(false);
                  }}
                  className="border rounded-sm px-3 py-1 text-sm font-light bg-blue-950 text-zinc-300 border-blue-900 hover:cursor-pointer"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {showDetails && (
          <TaskDetailsModal
            title={title}
            desc={desc}
            onClose={(e) => setShowDetails(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
