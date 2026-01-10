"use client";

const { createContext, useState, useEffect, useContext } = require("react");

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
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
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleCompletedTasks,
        handleArchivedTasks,
        handleDeletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => useContext(TaskContext);
