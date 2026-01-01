"use client";

import React from "react";
import Image from "next/image";

const TaskCard = ({ task, onComplete, onArchive, onDelete }) => {
    return (
        <div></div>
    )
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