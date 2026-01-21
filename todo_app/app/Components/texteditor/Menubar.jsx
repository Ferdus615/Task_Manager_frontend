"use client";

const Menubar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="mb-5 border-1 p-3 rounded-lg bg-[#1b2631] border-[#47505a]">
      <div className="flex flex-wrap gap-3 font-light text-sm">
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("heading", { level: 1 })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          H1
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("heading", { level: 2 })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          H2
        </button>

        <button
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("heading", { level: 3 })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          H3
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().setParagraph().run();
          }}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("paragraph") ? "bg-[#5f676f]" : "hover:bg-[#91979d]"
          }`}
        >
          Paragraph
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("bold") ? "bg-[#5f676f]" : "hover:bg-[#91979d]"
          }`}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("italic") ? "bg-[#5f676f]" : "hover:bg-[#91979d]"
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("strike") ? "bg-[#5f676f]" : "hover:bg-[#91979d]"
          }`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive("highlight") ? "bg-[#5f676f]" : "hover:bg-[#91979d]"
          }`}
        >
          Highlight
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive({ textAlign: "left" })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive({ textAlign: "center" })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive({ textAlign: "right" })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`p-1 bg-[#] rounded-lg transition ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-[#5f676f]"
              : "hover:bg-[#91979d]"
          }`}
        >
          Justify
        </button>
      </div>
    </div>
  );
};

export default Menubar;
