"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect } from "react";
import Menubar from "./Menubar";

const TaskContent = ({
  content,
  editable = false,
  onChange,
  onEditorReady,
}) => {
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
      onEditorReady?.(editor);
    }
  }, [editor, content, onEditorReady]);

  if (!editor) return null;

  return (
    <div
      className="text-zinc-300 mb-2 
    [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-bold"
    >
      <EditorContent editor={editor} />
    </div>
  );
};

export default TaskContent;
