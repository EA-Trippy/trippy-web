import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Signup from "../../public/icons/signup.svg";
import Signuperror from "../../public/icons/signuperror.svg";
import Photoadd from "../../public/icons/photoadd.svg";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(true);
  const [name, setName] = useState("");
  const [duplicateName, setDuplicateName] = useState<boolean>(false);
  const [blogName, setBlogName] = useState("");
  const [duplicateBlogName, setDuplicateBlogName] = useState<boolean>(false);
  const [IMG_URL, setIMGURL] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [IsduplicateName, IssetDuplicateName] = useState<boolean>(false);
  const [IsduplicateBlogName, IssetDuplicateBlogName] =
    useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const NewUser = async () => {
      try {
        const response = await axios.get("/api/currentUser");
        //console.log(response.data.newUser);

        // 3. 리다이렉션 처리
        if (response.data.newUser === false) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    NewUser();
  });

  const NameTimer = useRef<number | null>(null);
  const BlogNameTimer = useRef<number | null>(null);

  const handleNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const username = event.target.value;
    if (NameTimer.current !== null) {
      clearTimeout(NameTimer.current);
      NameTimer.current = null;
    }

    NameTimer.current = window.setTimeout(() => {
      performNameCheck(username); // 3초 후에 중복 검사 실행
      if (username.length > 10) {
        toast.error("Name이 10자리를 초과하였습니다.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
      if (username.length > 0 && username === blogName) {
        toast.error("Name과 BlogName을 다르게 설정해주세요.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }, 1000);
  };

  const performNameCheck = async (username: string) => {
    try {
      const checkName = await axios.get("/api/checkUsername", {
        params: { username },
      });
      //console.log(checkName.data);
      if (checkName.data.duplication == true) {
        setDuplicateName(true);
        toast.error("이미 있는 이름입니다!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else {
        setDuplicateName(false);
        IssetDuplicateName(true);
      }
    } catch (error) {
      console.log("실패했어요ㅠ", error);
    }
  };

  const handleBlogNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const blogname = event.target.value;
    if (BlogNameTimer.current !== null) {
      clearTimeout(BlogNameTimer.current);
      BlogNameTimer.current = null;
    }

    BlogNameTimer.current = window.setTimeout(() => {
      performBlogNameCheck(blogname); // 3초 후에 중복 검사 실행
      if (blogname.length > 20) {
        toast.error("BlogName이 20자리를 초과하였습니다.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
      if (blogname.length > 0 && name === blogname) {
        toast.error("Name과 BlogName을 다르게 설정해주세요.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }, 1000);
  };

  const performBlogNameCheck = async (blogname: string) => {
    try {
      const checkName = await axios.get("/api/checkBlogname", {
        params: { blogname },
      });
      //console.log(checkName.data);
      if (checkName.data.duplication == true) {
        setDuplicateBlogName(true);
        toast.error("이미 있는 블로그이름입니다!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else {
        setDuplicateBlogName(false);
        IssetDuplicateBlogName(true);
      }
    } catch (error) {
      console.log("실패했어요ㅠ", error);
    }
  };

  const handleNextClick = () => {
    setShowContent(false);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [isImageUploaded, setIsImageUploaded] = useState(true);

  const handleFileChange = async (e: any) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
    setIsImageUploaded(false);
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setSelectedImage(reader.result as string);
      }
    };

    // 이미지 파일을 formData에 담아서 서버에 보내고, 서버는 받은 이미지 파일을 S3에 저장하고 받은 URL 값을 클라이언트로 반환해준다.
    const formData = new FormData();
    formData.append("file", file);
    try {
      //
      const result = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // 중요: 멀티파트(form-data) 형식으로 보내기 위해 헤더 설정
        },
      });
      setIMGURL(result.data);
      setIsImageUploaded(true);
    } catch (e) {
      console.error("업로드 실패");
    }
  };

  const nameLength = name.length;
  const blogNameLength = blogName.length;
  const isNameAndBlogNameSame = name === blogName;
  const isNameLengthExceeded = nameLength > 10;
  const isBlogNameLengthExceeded = blogNameLength > 20;

  const inputClass =
    "bg-t100 border border-t200 text-t500 text-body4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2";

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (IsduplicateBlogName && IsduplicateName && isImageUploaded) {
      if (blogName.length > 20) {
        toast.error("BlogName이 20자리를 초과하였습니다.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        return;
      }
      if (blogName.length > 0 && name === blogName) {
        toast.error("Name과 BlogName을 다르게 설정해주세요.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        return;
      }
      if (name.length > 10) {
        toast.error("Name이 10자리를 초과하였습니다.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        return;
      }
      if (duplicateName) {
        toast.error("이미 있는 이름입니다!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        return;
      }
      if (duplicateBlogName) {
        toast.error("이미 있는 블로그이름입니다!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        return;
      }

      try {
        await axios.patch("/api/editProfile", {
          username: name,
          blogname: blogName,
          image: IMG_URL[0],
          //newUser: false,
        });
        console.log(IMG_URL[0]);

        // API 호출 후에 페이지 이동
        router.push("/");
      } catch (error) {
        console.log("실패했어요ㅠ", error);
      }
    }

    // 버튼을 누른 후 1초 뒤에 조건문 실행
    // 1초 (1000 milliseconds) 뒤에 실행
  };

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white mb-10">
        <Header title={"trippy_signup"}></Header>
        {showContent ? (
          <div className="flex items-center justify-center mt-10 mx-20">
            <div className="w-[50%] border border-t100 rounded-lg p-10 shadow">
              <p className="text-p100 text-h2 text-center mx-20">
                Trippy에 오신것을 환영합니다!
              </p>
              <div className="mt-20 text-center">
                <p className="text-t300 text-body4 mt-3">
                  당신이 가본 곳과 아직 가보지 못한 곳에 대한 이야기를 나눌 수
                  있는,
                </p>
                <p className="text-t300 text-body4 mt-3">
                  여행을 떠나는 모든 이들을 위한 블로그 서비스입니다.
                </p>
                <p className="text-t300 text-body4 mt-3">
                  자유롭게 블로그를 꾸미고, 소중한 순간들을 이미지와 함께
                  기록하여
                </p>
                <p className="text-t300 text-body4 mt-3">
                  여행의 아름다움을 공유할 수 있습니다.
                </p>
                <p className="text-t300 text-body4 mt-3">
                  서로의 이야기를 통해 각자의 여행을 더욱 뜻깊게 만들어보세요!
                </p>
                <div
                  className="w-40 h-10 mt-20 bg-p200 rounded-full text-caption4 text-t100 flex items-center justify-center mx-auto cursor-pointer pt-1"
                  onClick={handleNextClick}
                >
                  다음
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-10 mx-20">
            <div className="w-[50%] border border-t100 rounded-lg p-10 shadow">
              <p className="text-p100 text-h2 text-center mx-20">
                Trippy에 오신것을 환영합니다!
              </p>
              <form className="mt-6 mx-10" onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <label className="text-t300 text-body1">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      {duplicateName ||
                      (nameLength > 0 && isNameAndBlogNameSame) ||
                      isNameLengthExceeded ? (
                        <Signuperror />
                      ) : (
                        nameLength > 0 && <Signup />
                      )}
                    </div>
                    <input
                      name="username"
                      type="text"
                      className={inputClass}
                      onChange={(e) => {
                        handleNameChange(e);
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-t300 text-body1">Blog Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      {duplicateBlogName ||
                      (blogNameLength > 0 && isNameAndBlogNameSame) ||
                      isBlogNameLengthExceeded ? (
                        <Signuperror />
                      ) : (
                        blogNameLength > 0 && <Signup />
                      )}
                    </div>
                    <input
                      name="blogname"
                      type="text"
                      className={inputClass}
                      onChange={(e) => {
                        handleBlogNameChange(e);
                        setBlogName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-t300 text-body1">
                    Profile Image (선택)
                  </div>
                  <div className="flex items-center justify-center">
                    <div
                      className="flex items-center justify-center w-40 h-40 border border-t200 border-dashed rounded-full cursor-pointer bg-t100 mt-5"
                      onClick={handleUploadClick}
                    >
                      {selectedImage ? (
                        // 이미지가 선택된 경우 이미지를 원 안에 표시합니다.
                        <div
                          className="w-full h-full bg-cover bg-center rounded-full"
                          style={{ backgroundImage: `url(${selectedImage})` }}
                        />
                      ) : (
                        // 이미지가 선택되지 않은 경우 기본 아이콘을 원 안에 표시합니다.
                        <Photoadd />
                      )}
                    </div>
                    <input
                      name="image"
                      ref={fileInputRef}
                      className="hidden"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="w-40 h-10 mt-20 mx-auto">
                  <button
                    type="submit"
                    className="w-full h-full bg-p200 rounded-full text-caption4 text-t100 flex items-center justify-center cursor-pointer pt-1"
                  >
                    시작하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
