"use client";

import React from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import TaskList from "../Components/TaskList";

const page = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Archive page"} />

        {/* <TaskList tasks={archiveTask} /> */}
      </div>
    </div>
  );
};

export default page;
