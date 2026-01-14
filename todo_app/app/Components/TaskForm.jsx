"use client";
import React from "react";
import { useState } from "react";

const TaskForm = ({
  titelPlaceHolder = "Title",
  descPlaceHolder = "Enter Your Task...",
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
      <div
        className="p-3 w-[30%] border-[#575762] rounded-md bg-[#3f3f4b]
      flex flex-col gap-3"
      >
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder={titelPlaceHolder}
          className="outline-none font-bold text-2xl"
        />

        <hr className="text-zinc-600" />

        <input
          type="text"
          value={desc}
          onChange={handleDescChange}
          placeholder={descPlaceHolder}
          className="outline-none font-normal text-lg"
        />

        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-900/50 rounded-sm px-3 py-1 text-sm hover:cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

// <form onSubmit={handleFormSubmit} className="flex justify-center gap-2">
//   <textarea
//     value={title}
//     onChange={handleTitleChange}
//     placeholder={titelPlaceHolder}
//     className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
//   ></textarea>

//   <textarea
//     value={desc}
//     onChange={handleDescChange}
//     placeholder={descPlaceHolder}
//     className="border border-blue-500/30 rounded-sm w-60 p-1 text-sm bg-transparent"
//   ></textarea>

//   <button
//     type="submit"
//     className="bg-blue-900 hover:bg-blue-900/50 rounded-sm px-3 py-1 text-sm hover:cursor-pointer"
//   >
//     {buttonText}
//   </button>
// </form>
