"use client";

import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  onCompleted,
  onArchived,
  onDeleted,
  onPermanentDelete,
  emptyMsg,
}) => {
  return tasks.length === 0 ? (
    <p className="font-light text-zinc-500 flex justify-center mt-10">
      {emptyMsg}
    </p>
  ) : (
    <div className="columns-[300px] gap-5 mt-5">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          desc={task.desc}
          isCompleted={task.isCompleted}
          isArchived={task.isArchived}
          isDeleted={task.isDeleted}
          onCompleted={onCompleted}
          onArchived={onArchived}
          onDeleted={onDeleted}
          onPermanentDelete={onPermanentDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
