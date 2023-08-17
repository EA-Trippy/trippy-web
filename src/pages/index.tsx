import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TopPostList from "@/components/TopPostList";
import NewPostList from "@/components/NewPostList";
import Pencil from "../../public/icons/pencil.svg";
import axios from "axios";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [topPosts, setTopPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    if (imageRef.current) {
      const boxWidth = imageRef.current.parentElement?.offsetWidth;
      if (boxWidth) {
        imageRef.current.style.width = `${boxWidth}px`;
      }
    }
    const TOPPOST = async () => {
      try {
        const response = await axios.get("/api/posts");
        console.log(response.data);
        setTopPosts(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const NEWPOST = async () => {
      try {
        const response = await axios.get("/api/posts");
        setNewPosts(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    TOPPOST();
    NEWPOST();
  }, []);

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-10">
            <div className="flex items-center justify-between">
              <div className="text-p100 font-bold mt-5 mb-5">
                실시간 인기 포스트
              </div>
              <div>
                <Link href="/write">
                  <div className="w-20 h-8 bg-p200 flex items-center justify-center rounded-md p-1">
                    <Pencil />
                    <p className="text-white text-subtitle3 ml-2">글 쓰기</p>
                  </div>
                </Link>
              </div>
            </div>

            <TopPostList data={topPosts} />

            <p className="text-p100 mb-5 font-bold mt-10">최신 포스트</p>
            <hr className="border border-[#F5F5F5]" />

            <NewPostList data={newPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
