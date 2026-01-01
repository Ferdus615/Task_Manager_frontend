"use client";

import React from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";

const page = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-grow p-5 overflow-y-auto">
        <Title title={"Archiver page"} />
      </div>
    </div>
  );
};

export default page;
