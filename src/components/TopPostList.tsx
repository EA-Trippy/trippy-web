import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import styled from "styled-components";

// export const StyledSlider = styled(Slider)`
//   .slick-slide.slick-active {
//     padding-right: 30px;
//   }

//   .slick-list {
//     padding-right: -30px;
//   }
// `;

interface TopPostPropType {
  post: PostType;
}

interface TopPostListPropType {
  data: PostType[];
}

interface PostType {
  image: string;
  title: string;
  body: string;
  date: string;
  profile_image: string;
  nickname: string;
  likedCount: number;
  commentCount: number;
}

const TopPost = (props: TopPostPropType) => {
  const { post } = props;

  return (
    <div className="border border-gray-100 shadow">
      <div className="relative w-full h-52">
        <Image
          src={post.image}
          alt="Thumbnail"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Link href="/">
        <div className="mb-5 mt-5">
          <h1 className="text-black text-subtitle1 mb-3 ml-3">{post.title}</h1>
          <p className="text-t300 text-body1 mb-3 mx-3">{post.body}</p>
          <span className="text-t200 text-caption1 ml-3">{post.date}</span>
        </div>
      </Link>
      <div className="flex items-center justify-between mx-3 mb-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={post.profile_image}
              className="w-6 h-6 rounded-full"
              alt="Profile Image"
              width={24}
              height={24}
              style={{ objectFit: "cover" }}
            />
            <p className="ml-2 text-t300 text-caption1 mr-1">{`by ${post.nickname}`}</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Image alt="Heart" src={"/icons/heart.svg"} width={13} height={12} />
          <p className="text-t300 text-caption1 ml-1 mr-7">{post.likedCount}</p>
          <Image
            alt="Heart"
            src={"/icons/comment.svg"}
            width={13}
            height={12}
          />
          <p className="text-t300 text-caption1 ml-1 mr-3">
            {post.commentCount}
          </p>
        </div>
      </div>
    </div>
  );
};

const TopPostList = (props: TopPostListPropType) => {
  const { data } = props;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    //<div className="grid grid-flow-col gap-16">
    <Slider {...settings}>
      {data?.map((post, index) => {
        return <TopPost key={index} post={post} />;
      })}
    </Slider>
    //</div>
  );
};

export default TopPostList;
