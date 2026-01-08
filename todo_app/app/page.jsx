"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import TaskForm from "./Components/TaskForm";
import TaskCard from "./Components/TaskCard";
import TaskList from "./Components/TaskList";

function Page() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"My ToDo List"} />

        <TaskForm />

        {/* <TaskList
          tasks={tasks}
          completedHandler={CompletedHandler}
          archivedHandler={archivedHandler}
          deletedHandler={deletedHandler}
        /> */}
      </div>
    </div>
  );
}

export default Page;
