"use client";

const Menubar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="menubar">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>

      <button onClick={() => editor.chain().focus().toggleHighlight().run()}>
        Highlight
      </button>

      <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        Left
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        Center
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        Right
      </button>
    </div>
  );
};

export default Menubar;
