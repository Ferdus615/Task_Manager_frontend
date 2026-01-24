"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect } from "react";

const TaskContent = ({ content, editable = false, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },

    content,
    editable,
    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      if (onChange) onChange(editor.getJSON());
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) return null;

  return (
    <div className="text-zinc-300 mb-2">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TaskContent;
