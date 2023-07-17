import Header from "@/components/Header";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TopPostList from "@/components/TopPostList";

const TOP_POSTS = [
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "2023년 7월 1일",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        likedCount: 10,
        commentCount: 500,
    },
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "2023년 7월 1일",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        likedCount: 10,
        commentCount: 500,
    },
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "2023년 7월 1일",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        likedCount: 10,
        commentCount: 500,
    },
];

const NEW_POSTS = [
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "1일전",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        blogName: "두재정의 작은 공간",
        tags: ["일본", "오사카", "교토", "나라"],
        likedCount: 10,
        commentCount: 500,
    },
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "1일전",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        blogName: "두재정의 작은 공간",
        tags: ["일본", "오사카", "교토", "나라"],
        likedCount: 10,
        commentCount: 500,
    },
    {
        image: "/images/test-image.jpeg",
        title: "일본 간사이 지역 여행 Day1",
        body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
        date: "1일전",
        profile_image: "/images/test-image.jpeg",
        nickname: "두재정",
        blogName: "두재정의 작은 공간",
        tags: ["일본", "오사카", "교토", "나라"],
        likedCount: 10,
        commentCount: 500,
    },
];

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
            <div className="relative w-screen min-h-screen bg-white pb-20">
                {/* <Header title={"trippy"}></Header> */}
                <div className="mx-20">
                    <div className="mx-10">
                        <div className="flex items-center justify-between">
                            <div className="text-black font-bold mt-5 mb-5">실시간 인기 포스트</div>
                            <div>
                                <Link href="/">{/* 글쓰기 버튼 */}</Link>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                            <div className="col-span-2 sm:col-span-1">
                                <div className="border border-gray-100 shadow h-[400px] relative">
                                    <div>
                                        <Link href="/"></Link>
                                    </div> */}
                        <TopPostList data={TOP_POSTS} />
                        {/* </div>
                            </div>
                        </div> */}
                        <p className="text-black mb-5 font-bold">최신 포스트</p>
                        <div className="mb-10">
                            <hr className="border border-[#F5F5F5]" />
                            <div className="mt-10 flex items-center justify-between">
                                <div className="w-[15%] flex-shrink-0">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                    </div>
                                    <div className="mt-10">
                                        <p className="text-[#808080]">1시간 전</p>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <p className="text-[#808080] ml-1 mr-7">0</p>
                                            <p className="text-[#808080] ml-1">0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[60%] flex-shrink-0">
                                    <p className="font-bold text-[20px] text-black mb-10">
                                        [경기/안산] 민서헤어샵 202호
                                    </p>
                                    <p className="text-[#808080] mb-8">
                                        오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵
                                        202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은
                                        안산에 위치한 민서헤어샵 2∙∙∙
                                    </p>
                                    <div className="flex items-center">
                                        <Link href="/"></Link>
                                        <Link href="/" className="flex items-center">
                                            <p className="ml-2 text-[#333333] text-[12px]">
                                                이브, 프시케 그리고 푸른 수염의 아내
                                            </p>
                                            <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-[15%] flex-shrink-0">
                                    <Link href="/"></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <hr className="border border-[#F5F5F5]" />
                            <div className="mt-10 flex items-center justify-between">
                                <div className="w-[15%] flex-shrink-0">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                    </div>
                                    <div className="mt-10">
                                        <p className="text-[#808080]">1시간 전</p>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <p className="text-[#808080] ml-1 mr-7">0</p>
                                            <p className="text-[#808080] ml-1">0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[60%] flex-shrink-0">
                                    <p className="font-bold text-[20px] text-black mb-10">
                                        [경기/안산] 민서헤어샵 202호
                                    </p>
                                    <p className="text-[#808080] mb-8">
                                        오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵
                                        202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은
                                        안산에 위치한 민서헤어샵 2∙∙∙
                                    </p>
                                    <div className="flex items-center">
                                        <Link href="/"></Link>
                                        <Link href="/" className="flex items-center">
                                            <p className="ml-2 text-[#333333] text-[12px]">
                                                이브, 프시케 그리고 푸른 수염의 아내
                                            </p>
                                            <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-[15%] flex-shrink-0">
                                    <Link href="/"></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <hr className="border border-[#F5F5F5]" />
                            <div className="mt-10 flex items-center justify-between">
                                <div className="w-[15%] flex-shrink-0">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                        <div className="mb-1"></div>
                                    </div>
                                    <div className="mt-10">
                                        <p className="text-[#808080]">1시간 전</p>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <p className="text-[#808080] ml-1 mr-7">0</p>
                                            <p className="text-[#808080] ml-1">0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[60%] flex-shrink-0">
                                    <p className="font-bold text-[20px] text-black mb-10">
                                        [경기/안산] 민서헤어샵 202호
                                    </p>
                                    <p className="text-[#808080] mb-8">
                                        오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다.오늘은 안산에 위치한 민서헤어샵
                                        202 호에 갔다왔다. 오늘은 안산에 위치한 민서헤어샵 202호에 갔다왔다. 오늘은
                                        안산에 위치한 민서헤어샵 2∙∙∙
                                    </p>
                                    <div className="flex items-center">
                                        <Link href="/"></Link>
                                        <Link href="/" className="flex items-center">
                                            <p className="ml-2 text-[#333333] text-[12px]">
                                                이브, 프시케 그리고 푸른 수염의 아내
                                            </p>
                                            <p className="ml-2 text-[#808080] text-[10px]">by Kazuha</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-[15%] flex-shrink-0">
                                    <Link href="/"></Link>
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
