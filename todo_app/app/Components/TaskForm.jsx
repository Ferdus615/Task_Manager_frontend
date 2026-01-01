"use client";
import React from "react";

const TaskForm = () => {
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        placeholder="Enter task title..."
        className="border border-zinc-500 rounded-sm w-60 p-1 text-sm bg-transparent"
        value={title}
        onChange={handleTitle}
      />
      <input
        placeholder="Enter description..."
        className="border border-zinc-500 rounded-sm w-60 p-1 text-sm bg-transparent"
        value={desc}
        onChange={handleDesc}
      />
      <button
        type="submit"
        className="border border-zinc-500 bg-emerald-700 hover:bg-emerald-800 rounded-sm px-3 py-1 text-sm"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm