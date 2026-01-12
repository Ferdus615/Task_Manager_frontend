import React from "react";

const ConfirmModal = ({ isOpen, title, onCancel, onConfirm }) => {
   return (
    <div>
      <div>
        <span>{title}</span>
      </div>

      <div>
        <button onClick={() => onCancel}>Cancle</button>
        <button onClick={() => onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
