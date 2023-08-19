import Header from "@/components/Header";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import axios from "axios";

export default function Setting() {
  const [modalOpen, setModalOpen] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [userBlogName, setUserBlogName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const USERDATA = async () => {
      try {
        const response = await axios.get("/api/currentUser");
        console.log(response.data);
        console.log(response.data.image);
        setUserImage(response.data.image);
        setUserName(response.data.username);
        setUserBlogName(response.data.blogname);
        setUserEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    USERDATA();
  }, []);

  const showModal = (modalName: string) => {
    setModalOpen(modalName);
  };

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-10 mt-[70px] flex flex-row items-center justify-center">
            <div className="w-[780px] h-[600px] flex flex-col items-center shadow-md">
              <div className="w-[700px] h-[215px] mt-[55px] flex flex-row ">
                <div className="w-[160px] h-full flex flex-col items-center justify-center ">
                  <Image
                    src={userImage || "/images/test-image.jpeg"}
                    className="w-[160px] h-[160px] rounded-full"
                    alt="DashBoardImage"
                    width={160}
                    height={160}
                    style={{objectFit: "cover"}}
                  />
                  <button
                    className="w-[90px] h-[21px] mt-[9px] flex justify-center items-center bg-p200 text-caption1 text-t100 rounded-md"
                    onClick={() => {
                      showModal("changeImage");
                    }}
                  >
                    이미지 업로드
                  </button>
                  {modalOpen === "changeImage" && (
                    <Modal
                      modal={{
                        header: "이미지 변경",
                        content: "프로필 이미지를 제거하시겠습니까?",
                      }}
                      setModalOpen={setModalOpen}
                      modalOpen={modalOpen}
                    />
                  )}
                  <button
                    className="w-[90px] h-[21px] mt-[7px] flex justify-center items-center bg-t100 text-caption1 text-p200 rounded-md"
                    onClick={() => {
                      showModal("removeImage");
                    }}
                  >
                    이미지 제거
                  </button>
                  {modalOpen === "removeImage" && (
                    <Modal
                      modal={{
                        header: "이미지 제거",
                        content: "프로필 이미지를 제거하시겠습니까?",
                      }}
                      setModalOpen={setModalOpen}
                      modalOpen={modalOpen}
                    />
                  )}
                </div>
                <div className="ml-[40px] w-[500px] h-full flex flex-col">
                  <div className="w-full h-[57px] flex flex-row justify-between ">
                    <div className="flex flex-col">
                      <div className="text-subtitle2 text-p100">사용자 이름</div>
                      <div className="mt-[9px] text-body1">{userName}</div>
                    </div>
                    <button
                      className="text-p200 mt-[35px] text-caption1"
                      onClick={() => {
                        showModal("setName");
                      }}
                    >
                      수정
                    </button>
                    {modalOpen === "setName" && (
                      <Modal
                        modal={{
                          header: "닉네임 수정",
                          content: "수정할 닉네임을 입력해주세요.",
                        }}
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                      />
                    )}
                  </div>

                  <div className="w-full h-[57px] mt-[47px] flex flex-row justify-between ">
                    <div className="flex flex-col">
                      <div className="text-subtitle2 text-p100">블로그 제목</div>
                      <div className="mt-[9px] text-body1">{userBlogName}</div>
                    </div>
                    <button
                      className="text-p200 mt-[35px] text-caption1"
                      onClick={() => {
                        showModal("setBlog");
                      }}
                    >
                      수정
                    </button>
                    {modalOpen === "setBlog" && (
                      <Modal
                        modal={{
                          header: "블로그 이름 수정",
                          content: "수정할 블로그 이름을 입력해주세요.",
                        }}
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[655px] h-[220px] mt-[39px] flex flex-col">
                <div className="w-full h-[70px] flex flex-row">
                  <div className="w-[155px] text-subtitle2">이메일 주소</div>
                  <div className="w-[460px] text-body1">{userEmail}</div>
                  <div className=""></div>
                </div>
                <div className="w-full h-[106px] flex flex-row">
                  <div className="w-[155px] text-subtitle2">알림 설정</div>
                  <div className="w-[462px] text-body1">
                    <div className="">
                      <div className="text-body1">좋아요</div>
                      <button className=""></button>
                    </div>
                    <div className="mt-[-10px]">
                      <div className="text-body1">댓글</div>
                      <button className=""></button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[24px] flex flex-row">
                  <div className="w-[155px] text-subtitle2">회원 탈퇴</div>
                  <button
                    className="border:none underline text-body1 text-p200"
                    onClick={() => {
                      showModal("withdrawal");
                    }}
                  >
                    회원 탈퇴
                  </button>
                  {modalOpen === "withdrawal" && (
                    <Modal
                      modal={{
                        header: "회원탈퇴",
                        content: "회원탈퇴를 진행하시겠습니까?",
                      }}
                      setModalOpen={setModalOpen}
                      modalOpen={modalOpen}
                    />
                  )}
                </div>
                <div className="mt-[10px] text-caption3 text-t300">
                  탈퇴 시 모든 정보들이 삭제되며 복구되지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
