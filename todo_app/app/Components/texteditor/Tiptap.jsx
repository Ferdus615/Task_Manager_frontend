"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Menubar from "./Menubar";
import { useState } from "react"; // 1. Import useState

const Tiptap = () => {
  // 2. Add a simple state to force re-renders
  const [_, setUpdate] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Add your task...</p>",
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    immediatelyRender: false,
    autofocus: true,
    editable: true,
    // 3. This is the magic part:
    onTransaction: () => {
      setUpdate((prev) => prev + 1);
    },
  });

  if (!editor) return null;

  return (
    <div className="min-w-[30%] max-w-[50%] mx-auto p-5 rounded-lg text-[#fef9db] bg-[#272835]">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
