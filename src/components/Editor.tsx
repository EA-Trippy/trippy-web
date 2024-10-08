import axios from "axios";
import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

export default function Editor(props: { value: any; onChange: any }) {
  const { value, onChange } = props;
  //const [value, setValue] = useState(""); // Define and initialize 'value' state
  const quillRef = useRef<any>(null);

  // 이미지 처리를 하는 핸들러
  const imageHandler = () => {
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        // multer에 맞는 형식으로 데이터 만들어준다.
        const formData = new FormData();
        formData.append("file", file); // formData는 키-밸류 구조
        // 백엔드 multer라우터에 이미지를 보낸다.
        try {
          const result = await axios.post("/api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // 중요: 멀티파트(form-data) 형식으로 보내기 위해 헤더 설정
            },
          });
          const IMG_URL = result.data;
          // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
          // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
          // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

          // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
          const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
          // 1. 에디터 root의 innerHTML을 수정해주기
          // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
          // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
          // editor.root.innerHTML =
          //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
          if (editor) {
            // 2. 현재 에디터 커서 위치값을 가져온다
            const range = editor.getSelection();
            // 가져온 위치에 이미지를 삽입한다
            editor.insertEmbed(range.index, "image", IMG_URL[0]);
            editor.setSelection(range.index + 1);
          }
        } catch (error) {
          console.log("실패했어요ㅠ");
        }
      }
    });
  };

  const modules = useMemo(() => {
    return {
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
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
          ["clean"],
        ],
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
        // imageResize: {
        //   // https://www.npmjs.com/package/quill-image-resize-module-react 참고
        //   parchment: Quill.import("parchment"),
        //   modules: ["Resize", "DisplaySize", "Toolbar"],
        // },
      },
    };
  }, []);

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
    "float",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "height",
    "width",
  ];

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        formats={formats}
        placeholder="여러분의 경험을 자유롭게 적어주세요."
        className="h-[1000px] outline-none"
        theme="snow"
        value={value}
        onChange={onChange}
      />
      {/* <div>{value}</div> */}
      {/* Display the 'value' state */}
    </div>
  );
}
