"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const reorderTask = (activeId, overId) => {
    setTasks((prev) => {
      const oldIndex = prev.findIndex((t) => t.id === activeId);
      const newIndex = prev.findIndex((t) => t.id === overId);

      if (oldIndex === -1 || newIndex === -1) return prev;

      return arrayMove(prev, oldIndex, newIndex);
    });
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

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task)),
    );
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
        updateTask,
        reorderTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);
