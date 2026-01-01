"use client";

import React from "react";
import Image from "next/image";

const TaskCard = ({
  task,
  completedHandler,
  archivedHandler,
  deletedHandler,
}) => {
  return (
    <div className="flex flex-col border-2 border-blue-950 rounded-lg p-3 min-w-60 bg-blue-900/20">
      <span className="text-lg font-medium mb-2">{task.title}</span>
      <span className="text-sm font-light mb-4 text-zinc-400">
        {task.description}
      </span>
      <div className="flex gap-3 mt-auto">
        <button className="pt-4 pr-3" onClick={() => completedHandler(task.id)}>
          <Image src="/done.svg" height={18} width={18} alt="Completed" />
        </button>
        <button className="pt-4 pr-3" onClick={() => archivedHandler(task.id)}>
          <Image src="/archive.svg" height={18} width={18} alt="Archive" />
        </button>
        <button className="pt-4 pr-3" onClick={() => deletedHandler(task.id)}>
          <Image src="/delete.svg" height={18} width={18} alt="Trash" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

// let renderTask =
//     tasks.length === 0 ? (
//       <p className="text-center mt-10 text-zinc-500">
//         No tasks yet! Add one above.
//       </p>
//     ) : (
//       <div className="flex flex-wrap gap-5 mt-10">
//         {tasks.map((task) => (
//           <div
//             key={task.id}
//             className={`border border-zinc-400 p-3 flex flex-col w-64 rounded-md shadow-sm transition-all duration-200 ${
//               task.isCompleted ? "bg-emerald-700" : "bg-[#10172a]"
//             }`}
//           >
//             <span className="text-lg font-bold">{task.title}</span>
//             <span className="text-sm font-light">{task.description}</span>
//             <div className="text-sm flex gap-5 mt-3">
//               <button
//                 className="p-1 rounded-sm hover:scale-110 transition"
//                 onClick={() => CompletedHandler(task.id)}
//               >
//                 <Image src="/done.svg" height={18} width={18} alt="Completed" />
//               </button>
//               <button
//                 className="p-1 rounded-sm hover:scale-110 transition"
//                 onClick={() => archiveHandler(task.id)}
//               >
//                 <Image
//                   src="/archive.svg"
//                   height={18}
//                   width={18}
//                   alt="Archive"
//                 />
//               </button>
//               <button
//                 className="p-1 rounded-sm hover:scale-110 transition"
//                 onClick={() => deleteHandler(task.id)}
//               >
//                 <Image src="/delete.svg" height={18} width={18} alt="Trash" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
