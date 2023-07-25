import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Signup from "../../public/icons/signup.svg";
import Signuperror from "../../public/icons/signuperror.svg";
import Photoadd from "../../public/icons/photoadd.svg";

const SignUp = () => {
  const [showContent, setShowContent] = useState(true);
  const [name, setName] = useState("");
  const [blogName, setBlogName] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBlogNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogName(event.target.value);
  };

  const handleNextClick = () => {
    setShowContent(false);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const nameLength = name.length;
  const blogNameLength = blogName.length;
  const isNameAndBlogNameSame = name === blogName;
  const isNameLengthExceeded = nameLength > 10;
  const isBlogNameLengthExceeded = blogNameLength > 10;

  const inputClass =
    "bg-t100 border border-t200 text-t500 text-body4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2";

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
              <form className="mt-6 mx-10">
                <div className="mb-6">
                  <label className="text-t300 text-body1">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      {11 > nameLength && nameLength > 0 && <Signup />}
                      {isNameLengthExceeded && <Signuperror />}
                    </div>
                    <input
                      type="email"
                      className={inputClass}
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-t300 text-body1">Blog Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      {(blogNameLength > 0 && isNameAndBlogNameSame) ||
                      isBlogNameLengthExceeded ? (
                        <Signuperror />
                      ) : (
                        blogNameLength > 0 && <Signup />
                      )}
                    </div>
                    <input
                      type="email"
                      className={inputClass}
                      value={blogName}
                      onChange={handleBlogNameChange}
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
                      ref={fileInputRef}
                      className="hidden"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </form>
              <div className="w-40 h-10 mt-20 mx-auto">
                <Link href="/">
                  <div className="w-full h-full bg-p200 rounded-full text-caption4 text-t100 flex items-center justify-center cursor-pointer pt-1">
                    시작하기
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
