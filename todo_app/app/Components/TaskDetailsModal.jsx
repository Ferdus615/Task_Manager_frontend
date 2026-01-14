import React from "react";

const TaskDetailsModal = ({ title, desc, onClose }) => {
  return (
    <div>
      <div>
        <button>X</button>
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default TaskDetailsModal;
