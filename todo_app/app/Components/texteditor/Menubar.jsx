"use client";

import Image from "next/image";

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
        <Image src="/textEditor/h1.png" height={15} width={15} alt="btn" />
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
        <Image src="/textEditor/h2.png" height={15} width={15} alt="btn" />
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
        <Image src="/textEditor/h3.png" height={15} width={15} alt="btn" />
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
        <Image
          src="/textEditor/paragraph.png"
          height={15}
          width={15}
          alt="btn"
        />
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
        <Image src="/textEditor/bold.png" height={15} width={15} alt="btn" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("italic") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        <Image src="/textEditor/italic.png" height={15} width={15} alt="btn" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("strike") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        <Image src="/textEditor/strike.png" height={15} width={15} alt="btn" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive("highlight") ? "bg-[#121220]" : "hover:bg-[#121220]"
        }`}
      >
        <Image
          src="/textEditor/highlighter.png"
          height={15}
          width={15}
          alt="btn"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "left" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        <Image
          src="/textEditor/align-left.png"
          height={15}
          width={15}
          alt="btn"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "center" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        <Image
          src="/textEditor/align-center.png"
          height={15}
          width={15}
          alt="btn"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "right" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        <Image
          src="/textEditor/align-right.png"
          height={15}
          width={15}
          alt="btn"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`p-[5px] bg-[#] rounded-md transition ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-[#121220]"
            : "hover:bg-[#121220]"
        }`}
      >
        <Image
          src="/textEditor/align-justify.png"
          height={15}
          width={15}
          alt="btn"
        />
      </button>
    </div>
  );
};

export default Menubar;
