import Header from "@/components/Header";
import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import Ticket from "@/components/Ticket";
import Dashboard from "@/components/Dashboard";
import Badge from "@/components/Badge";
import Bookmark from "@/components/Bookmark";

export default function Setting() {
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
                    src={"/images/test-image.jpeg"}
                    className="w-[160px] h-[160px] rounded-full"
                    alt="DashBoardImage"
                    width={160}
                    height={160}
                    style={{objectFit: "cover"}}
                  />
                  <div className="w-[90px] h-[21px] mt-[9px] flex justify-center items-center bg-p200 text-caption1 text-t100 rounded-md">
                    이미지 업로드
                  </div>
                  <div className="w-[90px] h-[21px] mt-[7px] flex justify-center items-center bg-t100 text-caption1 text-p200 rounded-md">
                    이미지 제거
                  </div>
                </div>
                <div className="ml-[40px] w-[500px] h-full flex flex-col">
                  <div className="w-full h-[57px] flex flex-row justify-between ">
                    <div className="flex flex-col">
                      <div className="text-subtitle2 text-p100">사용자 이름</div>
                      <div className="mt-[9px] text-body1">nickname</div>
                    </div>
                    <div className="text-p200 mt-[35px] text-caption1">수정</div>
                  </div>

                  <div className="w-full h-[57px] mt-[47px] flex flex-row justify-between ">
                    <div className="flex flex-col">
                      <div className="text-subtitle2 text-p100">블로그 제목</div>
                      <div className="mt-[9px] text-body1">nickname</div>
                    </div>
                    <div className="text-p200 mt-[35px] text-caption1">수정</div>
                  </div>
                </div>
              </div>
              <div className="w-[655px] h-[220px] mt-[39px] flex flex-col">
                <div className="w-full h-[70px] flex flex-row">
                  <div className="w-[155px] text-subtitle2">이메일 주소</div>
                  <div className="w-[460px] text-body1">whwodud231@gmail.com</div>
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
                  <button className="border:none underline text-body1 text-p200">회원 탈퇴</button>
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
