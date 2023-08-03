import { useState } from "react";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function Home() {
  const [value, setValue] = useState(""); // Define and initialize 'value' state

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["link", "image", "video"],
      //["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "color",
    "direction",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        placeholder="여러분의 경험을 자유롭게 적어주세요."
        className="h-[1000px] outline-none"
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <div>{value}</div>
      <div dangerouslySetInnerHTML={{ __html: value }} />
      {/* Display the 'value' state */}
    </div>
  );
}
