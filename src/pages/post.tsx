import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Heart_Off from "../../public/icons/Heart_Off.svg";
import Heart_On from "../../public/icons/Heart_On.svg";
import BookMark_Off from "../../public/icons/BookMark_Off.svg";
import BookMark_On from "../../public/icons/BookMark_On.svg";
import CommentList from "@/components/Comment";
import { useState } from "react";

const ONE_POST = [
  {
    image: "/images/test-image.jpeg",
    title: "일본 간사이 지역 여행 Day1",
    body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ",
    date: "1일전",
    profile_image: "/images/test-image.jpeg",
    nickname: "두재정",
    blogName: "두재정의 작은 공간",
    tags: ["일본", "나라", "오사카"],
    likedCount: 10,
    BookMark: 8,
  },
];

const Comment = [
  {
    profile_image: "/images/test-image.jpeg",
    blogName: "두재정의 작은 공간",
    date: "2023년 7월 3일",
    body: "6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본",
  },
  {
    profile_image: "/images/test-image.jpeg",
    blogName: "두재정의 작은 공간1",
    date: "2023년 7월 4일",
    body: "ㅋㅋㅋㅋㅋ 하이",
  },
];

const OnePost = () => {
  const post = ONE_POST[0];
  const [likedCount, setLikedCount] = useState<number>(post.likedCount);
  const [IsLiked, setIsLiked] = useState<boolean>(false);
  const [BookMarkCount, setBookMarkCount] = useState<number>(post.BookMark);
  const [IsBookMark, setIsBookMark] = useState<boolean>(false);

  const handleLikedClick = () => {
    if (IsLiked) {
      setLikedCount(likedCount - 1);
    } else {
      setLikedCount(likedCount + 1);
    }
    setIsLiked(!IsLiked);
  };

  const handleBookMarkClick = () => {
    if (IsBookMark) {
      setBookMarkCount(BookMarkCount - 1);
    } else {
      setBookMarkCount(BookMarkCount + 1);
    }
    setIsBookMark(!IsBookMark);
  };

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white mb-20">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-20">
            <div className="mx-20 mt-10">
              <div className="text-h1 text-t500">{post.title}</div>
              <div className="flex items-center mt-5">
                <Link href="/">
                  <Image
                    src={post.profile_image}
                    className="w-6 h-6 rounded-full"
                    alt="Profile Image"
                    width={24}
                    height={24}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <Link href="/" className="flex items-center mt-1">
                  <p className="ml-2 text-t500 text-body1">{post.blogName}</p>
                  <p className="ml-2 text-t200 text-body1">{post.date}</p>
                </Link>
              </div>
              <div className="mt-10 text-body1 text-t300">{post.body}</div>
              <div className="mt-10 flex items-center ml-[-5px]">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="min-w-max h-6 bg-p200 rounded-full text-body3 text-t100 ml-1 px-3.5 pt-[1px] mb-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end">
                {IsLiked ? (
                  <Heart_On
                    onClick={handleLikedClick}
                    className="mr-2 cursor-pointer"
                  />
                ) : (
                  <Heart_Off
                    onClick={handleLikedClick}
                    className="mr-2 cursor-pointer"
                  />
                )}
                <div className="text-body4 text-t300 w-[30px]">
                  {likedCount}
                </div>
                {IsBookMark ? (
                  <BookMark_On
                    onClick={handleBookMarkClick}
                    className="mr-2 ml-4 cursor-pointer"
                  />
                ) : (
                  <BookMark_Off
                    onClick={handleBookMarkClick}
                    className="mr-2 ml-4 cursor-pointer"
                  />
                )}
                <div className="text-body4 text-t300 w-[30px] mr-[-10px]">
                  {BookMarkCount}
                </div>
              </div>
              <div className="text-body1 text-t300">
                {Comment.length}개의 댓글
              </div>
              <textarea
                className="placeholder:text-body1 placeholder:text-t300 block bg-white w-full h-40 border border-[#E6E6E6] rounded-md p-3 shadow-sm mt-3"
                placeholder="댓글을 작성해주세요"
              />
              <div className="flex items-center justify-end">
                <button
                  className="w-[112px] h-10 bg-p200 text-subtitle1 text-t100 text-center rounded-lg mt-3"
                  type="submit"
                >
                  <p className="mt-1">댓글 작성</p>
                </button>
              </div>

              <div>
                <CommentList data={Comment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePost;
