"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
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

  return (
    <div className="min-w-[30%] max-w-[50%] mx-auto">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
