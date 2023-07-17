import Image from "next/image";
import Link from "next/link";

type TopPostPropType = {
    post: PostType;
};

type TopPostListPropType = {
    data: PostType[];
};

type PostType = {
    image: string;
    title: string;
    body: string;
    date: string;
    profile_image: string;
    nickname: string;
    likedCount: number;
    commentCount: number;
};

const TopPost = (props: TopPostPropType) => {
    const { post } = props;

    return (
        <div className="">
            <div className="relative w-full h-24">
                <Image src={post.image} alt="Thumbnail" fill style={{ objectFit: "cover" }} />
            </div>
            <Link href="/">
                <div className="mb-5">
                    <h1 className="text-black font-bold mb-3">{post.title}</h1>
                    <p className="text-[#808080] text-[14px] mb-3">{post.body}</p>
                    <span className="text-[#BABABA] text-[10px]">{post.date}</span>
                </div>
            </Link>
            <div className="flex items-center justify-between">
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
                        <p className="ml-2 text-[#BABABA] text-[10px]">{`by ${post.nickname}`}</p>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Image alt="Heart" src={"/icons/heart.svg"} width={13} height={12} />
                    <p className="text-[#808080] ml-1 mr-7">{post.likedCount}</p>
                    <Image alt="Heart" src={"/icons/comment.svg"} width={13} height={12} />
                    <p className="text-[#808080] ml-1 mr-3">{post.commentCount}</p>
                </div>
            </div>
        </div>
    );
};

const TopPostList = (props: TopPostListPropType) => {
    const { data } = props;

    return (
        <div className="grid grid-flow-col gap-16">
            {data?.map((post, index) => {
                return <TopPost key={index} post={post} />;
            })}
        </div>
    );
};

export default TopPostList;
