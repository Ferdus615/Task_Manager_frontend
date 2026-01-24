"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { Oldenburg } from "next/font/google";

const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const reorderTask = (oldIndex, newIndex) => {
    setTasks((prev) => arrayMove(prev, oldIndex, newIndex));
  };

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
  const addTask = ({ title, desc }) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        desc,
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
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const handleArchivedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, isArchived: !task.isArchived, isDeleted: false }
          : task,
      ),
    );
  };

  const handleDeletedTasks = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, isDeleted: !task.isDeleted, isArchived: false }
          : task,
      ),
    );
  };

  const permanentDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        handleCompletedTasks,
        handleArchivedTasks,
        handleDeletedTasks,
        permanentDelete,
        reorderTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);
