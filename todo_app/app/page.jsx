"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function Page() {
  const [tasks, setTasks] = useState([]);

  // ====== load tasks ======
  useEffect(() => {
    const stroedTasks = localStorage.getItem("tasks");
    if (stroedTasks) {
      setTasks(JSON.parse(stroedTasks));
    }
  }, []);

  // ====== save tasks ======
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ====== add tasks ======
  const handleAddTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...task,
        isCompleted: false,
        isArchived: false,
        isDeleted: false,
      },
    ]);
  };

  //====== mark tasks status ======
  const handleCompletedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

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
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        <TaskForm onSubmitTask={handleAddTask} />

        <TaskList
          tasks={tasks.filter((task) => !task.isArchived && !task.isDeleted)}
          onCompleted={handleCompletedTasks}
          onArchived={handleArchivedTasks}
          onDeleted={handleDeletedTasks}
          emptyMsg={"No task yet! Please add task..."}
        />
      </div>
    </div>
  );
}

export default Page;
