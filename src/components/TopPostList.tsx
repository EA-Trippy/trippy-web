import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TopPostPropType {
  post: PostType;
}

interface TopPostListPropType {
  data: PostType[];
}

interface PostType {
  id: string;
  thumbnail: string;
  title: string;
  bodyHTML: string;
  createdAt: string;
  user: {
    username: string;
    image: string;
  };
  likedIds: string[];
  comments: string[];
}

const TopPost = (props: TopPostPropType) => {
  const { post } = props;
  const removeImgTags = (htmlContent: string) => {
    const imgRegex = /<img[^>]*>/g; // Regular expression to match img tags
    return htmlContent.replace(imgRegex, ""); // Remove img tags from the HTML
  };
  const postId = post.id;

  const sanitizedBody = removeImgTags(post.bodyHTML);

  return (
    <div className="border border-gray-100 shadow">
      <div className="relative w-full h-52">
        <Link href={`posts/${postId}`}>
          <Image
            src={post.thumbnail}
            alt="Thumbnail"
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="relative w-full px-3">
        <Link href={`posts/${postId}`}>
          <div className="mb-5 mt-5">
            <h1 className="text-black text-subtitle1 mb-3 h-6 truncate-ellipsis">
              {post.title}
            </h1>
            <div className="truncate-ellipsis text-t300 text-body1 mb-3 h-28">
              <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
            </div>
            <div className="text-t200 text-caption1 mt-1">
              {post.createdAt.slice(0, 10)}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between mx-3 mb-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={post.user.image}
              className="w-6 h-6 rounded-full"
              alt="Profile Image"
              width={24}
              height={24}
              style={{ objectFit: "cover" }}
            />
            <p className="ml-2 text-t300 text-caption1 mr-1">{`by ${post.user.username}`}</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Image alt="Heart" src={"/icons/heart.svg"} width={13} height={12} />
          <p className="text-t300 text-caption1 ml-1 mr-7">
            {post.likedIds.length}
          </p>
          <Image
            alt="Heart"
            src={"/icons/comment.svg"}
            width={13}
            height={12}
          />
          <p className="text-t300 text-caption1 ml-1 mr-3">
            {/* {post.comments.length} */}0
          </p>
        </div>
      </div>
    </div>
  );
};

const TopPostList = (props: TopPostListPropType) => {
  const { data } = props;

  const slicedData = data.slice(0, 6);

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
      {slicedData?.map((post) => {
        return <TopPost key={post.id} post={post} />;
      })}
    </Slider>
    //</div>
  );
};

export default TopPostList;
