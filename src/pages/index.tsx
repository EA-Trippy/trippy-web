import Header from "@/components/Header";
import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import Write from "@/public/images/icons/write.svg";
import Post_img from "@/public/images/icons/post_image.png";
import NewPost_1 from "@/public/images/icons/NewPost_1.png";
import Post_profile from "@/public/images/icons/post_profile.svg";
import Heart from "@/public/images/icons/heart.svg";
import Comment from "@/public/images/icons/comment.svg";
import Tag1 from "@/public/images/icons/tag1.svg";
import Tag2 from "@/public/images/icons/tag2.svg";
import Tag3 from "@/public/images/icons/tag3.svg";

// const posts = [
//   {
//     title: 
//   }
// ]


export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const boxWidth = imageRef.current.parentElement?.offsetWidth;
      if (boxWidth) {
        imageRef.current.style.width = `${boxWidth}px`;
      }
    }
  }, []);

  return (
    <>
    <div className = "relative w-screen min-h-screen bg-white pb-20">
      <Header title={"trippy"}></Header>
      <div className="mx-20">
        <div className = "mx-10">
          <div className = "flex items-center justify-between">
            <div className = "text-black font-bold mt-5 mb-5">실시간 인기 포스트</div>
            <div><Link href ="/"><Write/></Link></div>
          </div>
          <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div className="col-span-2 sm:col-span-1">
              <div className="border border-gray-100 shadow h-[400px] relative">
                <div>
                  <Link href="/">
                    <Image
                      ref={imageRef}
                      src={Post_img}
                      alt="Post Image"
                      className="absolute inset-0 w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                  <Link href="/">
                    <div className = "mb-5">
                      <p className="text-black font-bold mb-3">일본 간사이 지역 여행 Day1</p>
                      <p className="text-[#808080] text-[14px] mb-3">
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행
                      </p>
                      <p className="text-[#BABABA] text-[10px]">2023년 7월 1일</p>
                    </div>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Link href="/">
                        <Post_profile />
                      </Link>
                      <Link href="/">
                        <p className="ml-2 text-[#BABABA] text-[10px]">by UserID</p>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Heart />
                      <p className="text-[#808080] ml-1 mr-7">0</p>
                      <Comment />
                      <p className="text-[#808080] ml-1 mr-3">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "col-span-1">
            <div className="border border-gray-100 shadow h-[400px] relative">
                <div>
                  <Link href="/">
                    <Image
                      ref={imageRef}
                      src={Post_img}
                      alt="Post Image"
                      className="absolute inset-0 w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                  <Link href="/">
                    <div className = "mb-5">
                      <p className="text-black font-bold mb-3">일본 간사이 지역 여행 Day1</p>
                      <p className="text-[#808080] text-[14px] mb-3">
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행
                      </p>
                      <p className="text-[#BABABA] text-[10px]">2023년 7월 1일</p>
                    </div>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Link href="/">
                        <Post_profile />
                      </Link>
                      <Link href="/">
                        <p className="ml-2 text-[#BABABA] text-[10px]">by UserID</p>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Heart />
                      <p className="text-[#808080] ml-1 mr-7">0</p>
                      <Comment />
                      <p className="text-[#808080] ml-1 mr-3">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "col-span-1">
            <div className="border border-gray-100 shadow h-[400px] relative">
                <div>
                  <Link href="/">
                    <Image
                      ref={imageRef}
                      src={Post_img}
                      alt="Post Image"
                      className="absolute inset-0 w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                  <Link href="/">
                    <div className = "mb-5">
                      <p className="text-black font-bold mb-3">일본 간사이 지역 여행 Day1</p>
                      <p className="text-[#808080] text-[14px] mb-3">
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행
                        6박 7일 일본여행
                      </p>
                      <p className="text-[#BABABA] text-[10px]">2023년 7월 1일</p>
                    </div>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Link href="/">
                        <Post_profile />
                      </Link>
                      <Link href="/">
                        <p className="ml-2 text-[#BABABA] text-[10px]">by UserID</p>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Heart />
                      <p className="text-[#808080] ml-1 mr-7">0</p>
                      <Comment />
                      <p className="text-[#808080] ml-1 mr-3">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className = "text-black mb-5 font-bold">최신 포스트</p>
          <div className = "mb-10">
            <hr className="border border-[#F5F5F5]"/>
            <div className = "mt-10 flex items-center justify-between">
              <div className = "w-[15%] flex-shrink-0">
                <div className = "flex items-center justify-between flex-wrap">
                  <div className = "mb-1"><Tag1 /></div>
                  <div className = "mb-1"><Tag2 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                </div>
                <div className = "mt-10">
                  <p className="text-[#808080]">1시간 전</p>
                </div>
                <div className = "mt-8">
                  <div className="flex items-center">
                    <Heart />
                    <p className="text-[#808080] ml-1 mr-7">0</p>
                    <Comment />
                    <p className="text-[#808080] ml-1">0</p>
                  </div>
                </div>
              </div>
              <div className = "w-[60%] flex-shrink-0">
                <p className = "font-bold text-[20px] text-black mb-10">[경기/안산] 민서헤어샵 202호</p>
                <p className = "text-[#808080] mb-8">오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵 202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 2∙∙∙</p>
                <div className="flex items-center">
                  <Link href="/">
                    <Post_profile />
                  </Link>
                  <Link href="/" className="flex items-center">
                    <p className="ml-2 text-[#333333] text-[12px]">이브, 프시케 그리고 푸른 수염의 아내</p>
                    <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                  </Link>
                </div>
              </div>
              <div className = "w-[15%] flex-shrink-0">
                <Link href="/">
                  <Image
                    ref={imageRef}
                    src={NewPost_1}
                    alt="Post Image"
                    className="relative inset-0 h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className = "mb-10">
            <hr className="border border-[#F5F5F5]"/>
            <div className = "mt-10 flex items-center justify-between">
              <div className = "w-[15%] flex-shrink-0">
                <div className = "flex items-center justify-between flex-wrap">
                  <div className = "mb-1"><Tag1 /></div>
                  <div className = "mb-1"><Tag2 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                </div>
                <div className = "mt-10">
                  <p className="text-[#808080]">1시간 전</p>
                </div>
                <div className = "mt-8">
                  <div className="flex items-center">
                    <Heart />
                    <p className="text-[#808080] ml-1 mr-7">0</p>
                    <Comment />
                    <p className="text-[#808080] ml-1">0</p>
                  </div>
                </div>
              </div>
              <div className = "w-[60%] flex-shrink-0">
                <p className = "font-bold text-[20px] text-black mb-10">[경기/안산] 민서헤어샵 202호</p>
                <p className = "text-[#808080] mb-8">오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵 202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 2∙∙∙</p>
                <div className="flex items-center">
                  <Link href="/">
                    <Post_profile />
                  </Link>
                  <Link href="/" className="flex items-center">
                    <p className="ml-2 text-[#333333] text-[12px]">이브, 프시케 그리고 푸른 수염의 아내</p>
                    <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                  </Link>
                </div>
              </div>
              <div className = "w-[15%] flex-shrink-0">
                <Link href="/">
                  <Image
                    ref={imageRef}
                    src={NewPost_1}
                    alt="Post Image"
                    className="relative inset-0 h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className = "mb-10">
            <hr className="border border-[#F5F5F5]"/>
            <div className = "mt-10 flex items-center justify-between">
              <div className = "w-[15%] flex-shrink-0">
                <div className = "flex items-center justify-between flex-wrap">
                  <div className = "mb-1"><Tag1 /></div>
                  <div className = "mb-1"><Tag2 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                  <div className = "mb-1"><Tag3 /></div>
                </div>
                <div className = "mt-10">
                  <p className="text-[#808080]">1시간 전</p>
                </div>
                <div className = "mt-8"> 
                  <div className="flex items-center">
                    <Heart />
                    <p className="text-[#808080] ml-1 mr-7">0</p>
                    <Comment />
                    <p className="text-[#808080] ml-1">0</p>
                  </div>
                </div>
              </div>
              <div className = "w-[60%] flex-shrink-0">
                <p className = "font-bold text-[20px] text-black mb-10">[경기/안산] 민서헤어샵 202호</p>
                <p className = "text-[#808080] mb-8">오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵 202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 2∙∙∙</p>
                <div className="flex items-center">
                  <Link href="/">
                    <Post_profile />
                  </Link>
                  <Link href="/" className="flex items-center">
                    <p className="ml-2 text-[#333333] text-[12px]">이브, 프시케 그리고 푸른 수염의 아내</p>
                    <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                  </Link>
                </div>
              </div>
              <div className = "w-[15%] flex-shrink-0">
                <Link href="/">
                  <Image
                    ref={imageRef}
                    src={NewPost_1}
                    alt="Post Image"
                    className="relative inset-0 h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          <hr className="border border-[#F5F5F5]" />
        </div>  
      </div>
    </div>
    </>
  );
}
