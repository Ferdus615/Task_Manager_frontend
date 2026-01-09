"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

// Helper functions
const getLocalData = (key) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const saveLocalData = (key, data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

function Page() {
  const [mounted, setMounted] = useState(false);

  // Wait until the client mounts before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [tasks, setTasks] = useState([]);
  const [archiveTask, setArchiveTask] = useState([]);
  const [deleteTask, setDeleteTask] = useState([]);

  // Load from localStorage after mount
  useEffect(() => {
    if (mounted) {
      setTasks(getLocalData("tasks"));
      setArchiveTask(getLocalData("archive"));
      setDeleteTask(getLocalData("trash"));
    }
  }, [mounted]);

  // Save changes
  useEffect(() => {
    if (mounted) saveLocalData("tasks", tasks);
    console.log(`Tasks Array: `, tasks);
  }, [tasks, mounted]);

  useEffect(() => {
    if (mounted) saveLocalData("archive", archiveTask);
    console.log(`Archived Array: `, archiveTask);
  }, [archiveTask, mounted]);

  useEffect(() => {
    if (mounted) saveLocalData("trash", deleteTask);
    console.log(`Deleted Array: `, deleteTask);
  }, [deleteTask, mounted]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescChange = (e) => setDesc(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: desc.trim(),
      isCompleted: false,
    };

    setTasks((oldTask) => [newTask, ...oldTask]);
    setTitle("");
    setDesc("");
  };

  const CompletedHandler = (id) => {
    setTasks((oldTask) =>
      oldTask.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const archivedHandler = (id) => {
    const tasksToArchive = tasks.find((task) => task.id === id);
    setTasks((oldTask) => oldTask.filter((task) => task.id !== id));
    if (tasksToArchive)
      setArchiveTask((archivedTask) => [tasksToArchive, ...archivedTask]);
  };

  const deletedHandler = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setTasks((oldtask) => oldtask.filter((task) => task.id !== id));
    if (taskToDelete)
      setDeleteTask((deletedTask) => [taskToDelete, ...deletedTask]);
  };

  // Avoid rendering server markup before hydration
  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-screen text-zinc-400">
        Loading tasks...
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        <TaskForm
          onSubmit={handleSubmit}
          title={title}
          desc={desc}
          onTitleChange={handleTitleChange}
          onDescChange={handleDescChange}
        />

        <TaskList
          tasks={tasks}
          completedHandler={CompletedHandler}
          archivedHandler={archivedHandler}
          deletedHandler={deletedHandler}
        />
      </div>
    </div>
  );
}

export default Page;
