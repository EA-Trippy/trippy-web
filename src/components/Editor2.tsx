import { EditorProps } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const MyEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const updateTextDescription = (state: EditorState) => {
    setEditorState(state);
  };

  const uploadCallback = () => {
    console.log("이미지 업로드");
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={updateTextDescription}
        toolbar={{
          inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
          },
          blockType: {
            inDropdown: false,
            options: [
              "Normal",
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "Blockquote",
              "Code",
            ],
          },
          image: { uploadCallback: uploadCallback },
        }}
        localization={{ locale: "ko" }}
        editorStyle={{
          width: "100%",
          height: "100%",
        }}
        placeholder="여러분의 경험을 자유롭게 적어주세요."
      />
    </div>
  );
};

export default MyEditor;
