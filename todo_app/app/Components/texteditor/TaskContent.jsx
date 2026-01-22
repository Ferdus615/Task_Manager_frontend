"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

const TaskContent = ({ content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content,
    editable: false,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="text-[#91979d] mb-2">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TaskContent;
