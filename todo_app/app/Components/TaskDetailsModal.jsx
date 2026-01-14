"use client";

import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div>
        <button onClick={onClose}>X</button>
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default TaskDetailsModal;
