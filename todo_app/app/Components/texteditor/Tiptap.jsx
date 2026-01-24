"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Menubar from "./Menubar";
import { useState } from "react";
import { useTasks } from "@/app/context/TaskContext";

const Tiptap = (value, onChange) => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      Placeholder.configure({
        placeholder: "Add task here...",
      }),
    ],

    editorProps: {
      attributes: {
        class: "p-2 text-md text-zinc-300 outline-none",
      },
    },

    autofocus: true,
    immediatelyRender: false,
  });

  if (!editor) return null;

  const handleSaveTask = () => {
    if (!title.trim()) return;

    const content = editor.getJSON();

    addTask({
      title,
      desc: content,
    });

    setTitle("");
    editor.commands.clearContent();
  };

  return (
    <div
      className="min-w-[30%] max-w-[50%] mx-auto rounded-lg text-[#fef9db]
      [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-bold"
    >
      <Menubar
        editor={editor}
        style="mb-5 p-2 rounded-md bg-[#272835] border-[#47505a]
              flex flex-wrap gap-3 font-light text-sm"
      />
      <div className="border-1 rounded-lg p-3 border-[#5f676f]">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          className="w-full text-2xl font-bold text-zinc-300 p-2 rounded outline-none"
        />
        <EditorContent editor={editor} />
        <button
          onClick={handleSaveTask}
          className="w-full mt-4 px-2 py-1 rounded-md border-1 border-[#5f676f] bg-[#121220] hover:bg-[#272835]"
        >
          Save Task
        </button>
      </div>
    </div>
  );
};

export default Tiptap;
