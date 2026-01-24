"use client";

const Menubar = ({ editor, style }) => {
  if (!editor) return null;

  return (
    <div className={style}>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("heading", { level: 1 })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        H1
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("heading", { level: 2 })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        H2
      </button>

      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("heading", { level: 3 })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        H3
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.chain().focus().setParagraph().run();
        }}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("paragraph") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        Paragraph
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("bold") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        Bold
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("italic") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("strike") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("highlight") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        Highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "left" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "center" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "right" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        Right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        Justify
      </button>
    </div>
  );
};

export default Menubar;
