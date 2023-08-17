import Image from "next/image";
import Link from "next/link";

interface NewPostPropType {
  post: PostType;
}

interface NewPostListPropType {
  data: PostType[];
}

interface PostType {
  thumbnail: string;
  title: string;
  body: string;
  createdAt: string;
  user: {
    username: string;
    blogname: string;
    image: string;
  };
  tag: string[];
  likedIds: string[];
  comments: string[];
}

const NewPost = (props: NewPostPropType) => {
  const { post } = props;
  const removeImgTags = (htmlContent: string) => {
    const imgRegex = /<img[^>]*>/g; // Regular expression to match img tags
    return htmlContent.replace(imgRegex, ""); // Remove img tags from the HTML
  };

  const sanitizedBody = removeImgTags(post.body);

  return (
    <div className="h-[290px] py-10">
      <div className="flex justify-between">
        <div className="w-[15%] flex flex-col first:justify-between">
          <div className="flex items-start flex-wrap mt-2">
            {post.tag.map((tag, index) => (
              <div
                key={index}
                className="min-w-max h-6 bg-p200 rounded-full text-body3 text-t100 ml-1 px-3.5 pt-[1px] mb-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <div className="pl-1.5">
              <p className="text-t300 text-caption1">
                {post.createdAt.slice(0, 10)}
              </p>
            </div>
            <div className="flex pl-1.5 mt-10">
              <Image
                alt="Heart"
                src={"/icons/heart.svg"}
                width={13}
                height={12}
              />
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
                {/* {post.comments} */}0
              </p>
            </div>
          </div>
        </div>
        <div className="w-[60%] flex-shrink-0">
          <p className="font-bold text-t500 text-h2 mb-10 mt-1">{post.title}</p>
          <div
            className="truncate-ellipsis text-t300 text-body1 mb-10 h-16"
            dangerouslySetInnerHTML={{ __html: sanitizedBody }}
          />
          <div className="flex py-auto">
            <Link href="/">
              <Image
                src={post.user.image}
                className="w-6 h-6 rounded-full"
                alt="Profile Image"
                width={24}
                height={24}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <p className="pt-[1.5px] ml-2 text-t400 text-body2">
              {post.user.blogname}
            </p>
            <p className="pt-[1.5px] ml-2 text-t300 text-body2">
              {post.user.username}
            </p>
          </div>
        </div>
        <div className="w-[15%] flex-shrink-0 flex items-center">
          <Link href="/">
            <Image
              src={post.thumbnail}
              alt="Thumbnail"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>
      <hr className="border border-[#F5F5F5] my-10" />
    </div>
  );
};

const NewPostList = (props: NewPostListPropType) => {
  const { data } = props;

  return (
    <div className="">
      {data?.map((post, index) => {
        return <NewPost key={index} post={post} />;
      })}
    </div>
  );
};

export default NewPostList;
