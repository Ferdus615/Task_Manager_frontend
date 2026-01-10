"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";

const page = () => {
  const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    const deletdTasks = localStorage.getItem("deleted");
    if (deletdTasks) {
      setDeleted(JSON.parse(deletdTasks));
    }
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Trash Page"} />

        <TaskList tasks={deleted} />
      </div>
    </div>
  );
};

export default page;
