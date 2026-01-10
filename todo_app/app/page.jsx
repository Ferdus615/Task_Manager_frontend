"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function Page() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem(JSON.parse("tasks"));
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        <TaskForm onSubmitTask={handleAddTask} />

        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default Page;
