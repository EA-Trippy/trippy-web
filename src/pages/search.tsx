import Header from "@/components/Header";
import NewPostList from "@/components/NewPostList";
import Search2 from "../../public/icons/search2.svg";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); // 입력값 상태를 관리합니다.
  const [firstSearch, setfirstSearch] = useState<boolean>(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const PushEnter = async () => {
    try {
      console.log(searchValue);
      const response = await axios.get(`/api/search?search=${searchValue}`);
      setFilteredPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error handling comment submission:", error);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      setfirstSearch(true);
      PushEnter();
    }
  };

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
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
          </div>
        </div>
        <div className="mx-20">
          <div className="mx-10">
            {/* 필터링된 결과를 사용하여 NewPostList 컴포넌트에 전달합니다. */}
            {firstSearch === false ? null : (
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
