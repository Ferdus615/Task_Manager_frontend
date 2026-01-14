"use client";

import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-0 m-auto w-120 h-fit p-5 rounded-lg bg-red-800 "
    >
      <div>
        <button onClick={onClose}>X</button>
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default TaskDetailsModal;
