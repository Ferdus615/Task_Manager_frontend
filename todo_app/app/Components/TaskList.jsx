"use client";

import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  completedHandler,
  archivedHandler,
  deletedHandler,
  emptyMsg = "No task yet! Add one above.",
}) => {
  return tasks.lenght === 0 ? (
    <p>{emptyMsg}</p>
  ) : (
    <div className="flex flex-wrap gap-5 mt-10">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          completedHandler={completedHandler}
          archivedHandler={archivedHandler}
          deletedHandler={deletedHandler}
        />
      ))}
    </div>
  );
};

export default TaskList;
