"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";

const page = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stroedTasks = localStorage.getItem("tasks");
    if (stroedTasks) {
      setTasks(JSON.parse(stroedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleArchivedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isArchived: !task.isArchived } : task
      )
    );
  };

  const handleDeletedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDeleted: !task.isDeleted } : task
      )
    );
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Archive page"} />

        <TaskList
          tasks={tasks.filter((task) => task.isArchived && !task.isDeleted)}
          onArchived={handleArchivedTasks}
          onDeleted={handleDeletedTasks}
        />
      </div>
    </div>
  );
};

export default page;
