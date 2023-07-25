import Header from "@/components/Header";
import NewPostList from "@/components/NewPostList";
import Search2 from "../../public/icons/search2.svg";
import { useState } from "react";

const NEW_POSTS = [
  {
    image: "/images/test-image.jpeg",
    title: "일본 간사이 지연 여행 Day1",
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
    tags: ["일본", "오사카", "후쿠오카", "나라"],
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
    tags: ["일본", "나라", "오사카"],
    likedCount: 10,
    commentCount: 500,
  },
];

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); // 입력값 상태를 관리합니다.

  // 입력값이 변경될 때마다 필터링 로직을 실행합니다.
  const filteredPosts = NEW_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white mb-10">
        <Header title={"trippy_signup"}></Header>
        <div className="mx-20 mt-10 flex items-center justify-center mb-10">
          <div className="mx-10 border border-p200 w-full h-[120px]">
            <div className="flex items-center h-full ml-10">
              <div className="mr-5">
                <Search2 />
              </div>

              <input
                type="text"
                id="default-search"
                className="block w-full h-full text-t500 text-[32px] p-5 outline-none"
                placeholder="검색어를 입력해주세요."
                required
                value={searchValue} // 입력값 상태를 입력칸에 반영합니다.
                onChange={(e) => setSearchValue(e.target.value)} // 입력값이 변경될 때마다 상태를 업데이트합니다.
              />
            </div>
          </div>
        </div>
        <div className="mx-20">
          <div className="mx-10">
            {/* 필터링된 결과를 사용하여 NewPostList 컴포넌트에 전달합니다. */}
            {searchValue === "" ? null : (
              <>
                {filteredPosts.length > 0 ? (
                  <>
                    <p className="text-t300 text-body4">
                      총 {filteredPosts.length}개의 게시물을 찾았습니다.
                    </p>
                    <hr className="border border-[#F5F5F5] mt-5" />
                    <NewPostList data={filteredPosts} />
                  </>
                ) : (
                  <p className="text-t300 text-body4">
                    검색 결과가 없습니다. 다른 검색어로 시도해 보세요.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
