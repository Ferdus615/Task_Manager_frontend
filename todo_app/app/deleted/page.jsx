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
    permanentDelete,
  } = useTasks();

  const deletedTasks = tasks.filter((task) => task.isDeleted);
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Trash Page"} />

        <TaskList
          tasks={deletedTasks}
          onCompleted={handleCompletedTasks}
          onDeleted={handleDeletedTasks}
          onPermanentDelete={permanentDelete}
        />
      </div>
    </div>
  );
};

export default page;
