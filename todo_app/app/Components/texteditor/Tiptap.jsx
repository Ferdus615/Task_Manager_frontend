"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, TextAlign],
    content: "<p>Add your task...</p>",
    editable: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none p-3 rounded-lg overflow-y-auto text-[#fef9db] bg-[#272835]",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="min-w-[30%] max-w-[50%] mx-auto">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
