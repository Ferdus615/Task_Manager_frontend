"use client";
import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function Page() {
  const [tasks, setTasks] = useState([]);

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

  const handleCompleted = (id) => {};

  const handleArchived = (id) => {};

  const handleDeleted = (id) => {};

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
