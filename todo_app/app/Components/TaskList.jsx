"use client";

import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, emptyMsg = "No task yet! Add one above." }) => {
  return tasks.lenght === 0 ? (
    <p>{emptyMsg}</p>
  ) : (
    <div className="flex flex-wrap items-start gap-5 mt-10">
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} desc={task.desc} />
      ))}
    </div>
  );
};

export default TaskList;
