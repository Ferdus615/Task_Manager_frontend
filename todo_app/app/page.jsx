"use client";
import React from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { useTasks } from "./context/TaskContext";
import Tiptap from "./Components/texteditor/Tiptap";

function Page() {
  const {
    tasks,
    handleAddTask,
    handleCompletedTasks,
    handleArchivedTasks,
    handleDeletedTasks,
  } = useTasks();

  const activeTasks = tasks.filter(
    (task) => !task.isArchived && !task.isDeleted
  );

  const handleCompleted = (id) => {};

  const handleArchived = (id) => {};

  const handleDeleted = (id) => {};

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col gap-5 flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        {/* <TaskForm onSubmitTask={handleAddTask} /> */}

        <Tiptap />

        <TaskList
          tasks={activeTasks}
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
