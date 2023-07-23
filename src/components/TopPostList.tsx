import Image from "next/image";
import Link from "next/link";

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
      <div className="relative w-full h-40">
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

  return (
    <div className="grid grid-flow-col gap-16 mb-10">
      {data?.map((post, index) => {
        return <TopPost key={index} post={post} />;
      })}
    </div>
  );
};

export default TopPostList;
