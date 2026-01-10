"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";
import { useTasks } from "../context/TaskContext";

const page = () => {
  const {
    tasks,
    handleCompletedTasks,
    handleArchivedTasks,
    handleDeletedTasks,
  } = useTasks();

  const archiveTasks = tasks.filter(
    (task) => task.isArchived && !task.isDeleted
  );
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Archive page"} />

        <TaskList
          tasks={archiveTasks}
          onCompleted={handleCompletedTasks}
          onArchived={handleArchivedTasks}
          onDeleted={handleDeletedTasks}
        />
      </div>
    </div>
  );
};

export default page;
