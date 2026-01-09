"use client";
import React from "react";
import { useState } from "react";

const TaskForm = ({
  titelPlaceHolder = "Enter your Title here...",
  descPlaceHolder = "Enter your Desciption here",
  buttonText = "Add Task",
  onSubmitTask,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if (!title || !desc) return;

    console.log(`Title: ${title}`);
    console.log(`Desc: ${desc}`);

    onSubmitTask({
      title,
      desc,
    });

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex justify-center gap-2">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder={titelPlaceHolder}
        className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
      />

      <input
        type="text"
        value={desc}
        onChange={handleDescChange}
        placeholder={descPlaceHolder}
        className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
      />

      <button
        type="submit"
        className="bg-blue-900 hover:bg-blue-900/50 rounded-sm px-3 py-1 text-sm hover:cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default TaskForm;
