"use client";

import Image from "next/image";
import React, { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";
import TaskContent from "./texteditor/TaskContent";

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

  //
  return (
    <div
      onClick={() => setShowDetails(true)}
      className={`break-inside-avoid flex flex-col border-2 rounded-lg p-3 min-w-60 max-w-80 mb-5 bg-[#272835] 
        ${isCompleted ? "border-[#22946e]" : "border-[#3f3f4b]/0"}
        ${isDeleted ? "border-[#9c2121]" : "border-[#3f3f4b]/0"}`}
    >
      <div className="flex flex-col max-h-[500px] overflow-hidden">
        <h2 className="text-lg font-medium mb-2 text-[#fef9db]">{title}</h2>

        <hr className="text-[#fef9db]/20 mb-2" />

        <TaskContent content={desc} />
      </div>

      <div className="flex pt-2 gap-7">
        {onCompleted && (
          <button
            onClick={(e) => handleAction(e, onCompleted)}
            title={isCompleted ? "Incomplete task" : "Complete task"}
            className="hover:scale-110 transition duration-200"
          >
            <Image src="/done.svg" width={20} height={20} alt="completed" />
          </button>
        )}

        {onArchived && (
          <button
            onClick={(e) => handleAction(e, onArchived)}
            title={isArchived ? "Unarchive task" : "Archive task"}
            className="hover:scale-110 transition duration-200"
          >
            <Image src="/archive.svg" width={22} height={20} alt="Archive" />
          </button>
        )}

        {onDeleted && (
          <button
            onClick={(e) => handleAction(e, onDeleted)}
            title={isDeleted ? "Undo delete" : "Delete task"}
            className="hover:scale-110 transition duration-200"
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
            className="group hover:scale-110 transition duration-200"
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
            className="fixed inset-0 bg-[black/60] backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div
              className="flex flex-col gap-5 items-center absolute inset-0 m-auto w-fit h-fit p-6
             rounded-lg bg-[#9c2121] border-2 border-[#8b8b93] z-50"
            >
              <div>
                <span className="font-normal text-sm">
                  Are you sure? You want to delete this!
                </span>
              </div>
              <div className="flex gap-5 mt-3">
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="rounded-sm px-3 py-1 text-sm font-bold text-zinc-300 bg-[#22946e] hover:cursor-pointer"
                >
                  Cancle
                </button>

                <button
                  onClick={() => {
                    onPermanentDelete(id);
                    setConfirmDelete(false);
                  }}
                  className="rounded-sm px-3 py-1 text-sm font-bold text-zinc-300 bg-[#d94a4a] hover:cursor-pointer"
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
