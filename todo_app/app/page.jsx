"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function Page() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

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

  //====== mark completed tasks ======
  const handleCompletedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  //====== mark archived tasks ======
  const handleArchivedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isArchived: true } : task
      )
    );
  };

  //====== mark deleted tasks ======
  const handleDeletedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isDeleted: true } : task))
    );
  };

  // ====== save tasks ======
  useEffect(() => {
    const tasksArr = tasks.filter(
      (task) => !task.isArchived && !task.isDeleted
    );
    const archivedArr = tasks.filter(
      (task) => task.isArchived && !task.isDeleted
    );
    const deletedArr = tasks.filter(
      (task) => task.isDeleted && !task.isArchived
    );

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    localStorage.setItem("archived", JSON.stringify(archivedArr));
    localStorage.setItem("deleted", JSON.stringify(deletedArr));
  }, [tasks]);

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        <TaskForm onSubmitTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onCompleted={handleCompletedTasks}
          onArchived={handleArchivedTasks}
          onDeleted={handleDeletedTasks}
        />
      </div>
    </div>
  );
}

export default Page;
