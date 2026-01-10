"use client";

const { createContext, useState } = require("react");

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
};
