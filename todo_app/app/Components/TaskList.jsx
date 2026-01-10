"use client";

import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, emptyMsg = "No task yet! Please add task..." }) => {
  return tasks.length === 0 ? (
    <p className="font-light text-zinc-500 flex justify-center mt-10">
      {emptyMsg}
    </p>
  ) : (
    <div className="flex flex-wrap items-start gap-5 mt-10">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          desc={task.desc}
          isCompleted={task.isCompleted}
          onCompleted={handleCompletedTasks}
          onArchived={handleArchivedTasks}
          onDeleted={handleDeletedTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
