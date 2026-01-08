"use client";

import React from "react";

const TaskCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col border-2 border-blue-950 rounded-lg p-3 w-60">
      <span className="text-lg font-medium mb-2">{title}</span>
      <span className="text-sm font-light mb-4 text-zinc-400">{desc}</span>
    </div>
  );
};

export default TaskCard;
