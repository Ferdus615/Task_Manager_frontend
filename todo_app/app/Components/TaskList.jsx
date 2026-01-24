"use client";

import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import MoveCard from "./MoveCard";

const TaskList = ({
  tasks,
  onCompleted,
  onArchived,
  onDeleted,
  onPermanentDelete,
  onReorder,
  emptyMsg,
}) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    onReorder(active.id, over.id);
  };

  return tasks.length === 0 ? (
    <p className="font-light text-zinc-500 flex justify-center mt-10">
      {emptyMsg}
    </p>
  ) : (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={rectSortingStrategy}
      >
        <div className="columns-[300px] gap-5 mt-5">
          {tasks.map((task) => (
            <MoveCard
              key={task.id}
              task={task}
              isCompleted={task.isCompleted}
              isArchived={task.isArchived}
              isDeleted={task.isDeleted}
              onCompleted={onCompleted}
              onArchived={onArchived}
              onDeleted={onDeleted}
              onPermanentDelete={onPermanentDelete}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default TaskList;
