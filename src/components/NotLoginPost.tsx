import Image from "next/image";
import Link from "next/link";

interface NewPostPropType {
  post: PostType;
}

interface PostType {
  id: string;
  title: string;
  bodyHTML: string;
  createdAt: string;
  user: {
    username: string;
    image: string;
  };
  tag: string[];
  comments: string[];
}

const NotLoginPost = (props: NewPostPropType) => {
  const { post } = props;

  return (
    <div>
      <div className="text-h1 text-t500">{post.title}</div>
      <div className="flex items-center mt-5">
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
        <Link href="/" className="flex items-center mt-1">
          <p className="ml-2 text-t500 text-body1">{post.user.username}</p>
          <p className="ml-2 text-t200 text-body1">{post.createdAt}</p>
        </Link>
      </div>
      <div
        className="mt-10 text-body1 text-t300"
        dangerouslySetInnerHTML={{ __html: post.bodyHTML }}
      ></div>
      <div className="mt-10 flex items-center ml-[-5px]">
        {post.tag.map((tag, index) => (
          <div
            key={index}
            className="min-w-max h-6 bg-p200 rounded-full text-body3 text-t100 ml-1 px-3.5 pt-[1px] mb-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotLoginPost;
