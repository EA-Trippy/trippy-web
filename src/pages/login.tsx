import Header from "@/components/Header";
import { signIn } from "next-auth/react";
import Logo from "../../public/icons/logo.svg";
import Kakao from "../../public/icons/kakao.svg";
import Google from "../../public/icons/google.svg";
import Naver from "../../public/icons/naver.svg";

export default function Home() {
  return (
    <>
      <div className="relative w-screen bg-white">
        <div className="flex items-center justify-center mt-20">
          <div className="min-w-[50%] border border-t100 rounded-lg p-10 shadow">
            <div className="flex items-center justify-center mt-10">
              <Logo />
            </div>

            <div className="mt-20 text-center">
              <p className="text-t300 text-caption1 mt-3">
                나만의 여행기 블로그 Trippy!
              </p>
              <p className="text-t300 text-caption1 mt-3">어쩌구 ~</p>
              <p className="text-t300 text-caption1 mt-3">지금 시작해볼까요?</p>
            </div>
            <div className="flex items-center justify-center mt-10">
              <button
                onClick={() =>
                  signIn("kakao", {
                    redirect: true,
                    callbackUrl: "/signup",
                  })
                }
                className="min-w-[310px] h-[40px] bg-[#FEE500] rounded-lg px-5 py-2 shadow-md"
              >
                <div className="flex items-center">
                  <Kakao />
                  <p className="text-[#191919] text-body2 ml-[60px]">
                    카카오로 시작하기
                  </p>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center mt-3">
              <button
                onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: "/signup",
                  })
                }
                className="min-w-[310px] h-[40px] bg-t100 rounded-lg px-5 shadow-md"
              >
                <div className="flex items-center">
                  <Google />
                  <p className="text-t300 text-body2 ml-[60px]">
                    구글로 시작하기
                  </p>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center mt-3">
              <button
                onClick={() =>
                  signIn("naver", {
                    redirect: true,
                    callbackUrl: "/signup",
                  })
                }
                className="min-w-[310px] h-[40px] bg-[#03C75A] rounded-lg px-5 shadow-md"
              >
                <div className="flex items-center">
                  <Naver />
                  <p className="text-t100 text-body2 ml-[50px]">
                    네이버로 시작하기
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
