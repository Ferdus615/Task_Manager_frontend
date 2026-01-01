"use client";
import React from "react";

const TaskForm = ({
  onSubmit,
  title,
  desc,
  titelPlaceHolder = "Enter your Title here...",
  descPlaceHolder = "Enter your Desciption here",
  onTitleChange,
  onDescChange,
  buttonText = "Add Task",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder={titelPlaceHolder}
        className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
      />
      <input
        type="text"
        value={desc}
        onChange={onDescChange}
        placeholder={descPlaceHolder}
        className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
      />
      <button
        type="submit"
        className="bg-blue-900 hover:bg-blue-900/50 rounded-sm px-3 py-1 text-sm"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default TaskForm;
