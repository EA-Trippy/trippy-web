import Image from "next/image";
import Link from "next/link";

interface NewPostPropType {
  post: PostType;
}

interface NewPostListPropType {
  data: PostType[];
}

interface PostType {
  image: string;
  title: string;
  body: string;
  date: string;
  profile_image: string;
  nickname: string;
  blogName: string;
  tags: string[];
  likedCount: number;
  commentCount: number;
}

const NewPost = (props: NewPostPropType) => {
  const { post } = props;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div className="w-[15%] flex-shrink-0">
          <div className="flex items-center flex-wrap">
            {post.tags.map((tag, index) => (
              <div
                key={index}
                className="min-w-max h-6 bg-p200 rounded-full text-body3 text-t100 ml-1 px-3.5 pt-[1px] mb-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-[#808080]">{post.date}</p>
          </div>
          <div className="mt-11 flex items-center">
            <Image
              alt="Heart"
              src={"/icons/heart.svg"}
              width={13}
              height={12}
            />
            <p className="text-t300 text-caption1 ml-1 mr-7">
              {post.likedCount}
            </p>
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
        <div className="w-[60%] flex-shrink-0">
          <p className="font-bold text-t500 text-h2 mb-10 mt-1">{post.title}</p>
          <p className="text-t300 text-body1 mb-10">{post.body}</p>
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={post.profile_image}
                className="w-6 h-6 rounded-full mt-1"
                alt="Profile Image"
                width={24}
                height={24}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <Link href="/" className="flex items-center mt-2">
              <p className="ml-2 text-t400 text-body1">{post.blogName}</p>
              <p className="ml-2 text-t300 text-body1">{post.nickname}</p>
            </Link>
          </div>
        </div>
        <div className="w-[15%] flex-shrink-0">
          <Link href="/">
            <Image
              src={post.image}
              alt="Thumbnail"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>
      <hr className="border border-[#F5F5F5] mt-10" />
    </div>
  );
};

const NewPostList = (props: NewPostListPropType) => {
  const { data } = props;

  return (
    <div className="mt-10">
      {data?.map((post, index) => {
        return <NewPost key={index} post={post} />;
      })}
    </div>
  );
};

export default NewPostList;
