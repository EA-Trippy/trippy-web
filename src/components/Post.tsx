import Image from "next/image";
import Link from "next/link";
import Heart_Off from "../../public/icons/Heart_Off.svg";
import Heart_On from "../../public/icons/Heart_On.svg";
import BookMark_Off from "../../public/icons/BookMark_Off.svg";
import BookMark_On from "../../public/icons/BookMark_On.svg";
import { useEffect, useState } from "react";
import axios from "axios";

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
  likedIds: string[];
  bookmarkedIds: string[];
  comments: string[];
}

const Post = (props: NewPostPropType) => {
  const { post } = props;
  const [likedCount, setLikedCount] = useState<number>(0);
  const [IsLiked, setIsLiked] = useState<boolean>(false);
  const [BookMarkCount, setBookMarkCount] = useState<number>(0);
  const [IsBookMark, setIsBookMark] = useState<boolean>(false);

  useEffect(() => {
    const LikedTrue = async () => {
      try {
        const userResponse = await axios.get(`/api/currentUser`);
        const userId = userResponse.data.id;

        if (post.likedIds.includes(userId)) {
          setIsLiked(true);
          setLikedCount(post.likedIds.length);
        } else {
          setIsLiked(false);
          setLikedCount(post.likedIds.length);
        }
      } catch (error) {
        console.log(error);
      }
      //console.log(IsLiked);
    };

    const BookMarkTrue = async () => {
      try {
        const userResponse = await axios.get(`/api/currentUser`);
        const userId = userResponse.data.id;

        if (post.bookmarkedIds.includes(userId)) {
          setIsBookMark(true);
          setBookMarkCount(post.bookmarkedIds.length);
        } else {
          setIsBookMark(false);
          setBookMarkCount(post.bookmarkedIds.length);
        }
      } catch (error) {
        console.log(error);
      }
      //console.log(IsLiked);
    };

    LikedTrue();
    BookMarkTrue();
    //console.log(DetailPost);
  }, [post.likedIds, post.bookmarkedIds]);

  const handleLikedClick = async () => {
    //console.log(post.id);
    try {
      if (IsLiked) {
        await axios.delete(`/api/like?postId=${post.id}`);
        setIsLiked(!IsLiked);
        setLikedCount(likedCount - 1);
      } else {
        await axios.post(`/api/like?postId=${post.id}`);
        setIsLiked(!IsLiked);
        setLikedCount(likedCount + 1);
      }
    } catch (error) {
      console.error("Error handling liked click:", error);
    }
  };

  const handleBookMarkClick = async () => {
    console.log(post.id);
    try {
      if (IsBookMark) {
        await axios.delete(`/api/bookmark?postId=${post.id}`);
        setIsBookMark(!IsBookMark);
        setBookMarkCount(BookMarkCount - 1);
      } else {
        await axios.post(`/api/bookmark?postId=${post.id}`);
        setIsBookMark(!IsBookMark);
        setBookMarkCount(BookMarkCount + 1);
      }
    } catch (error) {
      console.error("Error handling liked click:", error);
    }
  };

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
      <div className="flex items-center justify-end">
        {IsLiked ? (
          <Heart_On
            onClick={handleLikedClick}
            className="mr-2 cursor-pointer"
          />
        ) : (
          <Heart_Off
            onClick={handleLikedClick}
            className="mr-2 cursor-pointer"
          />
        )}
        <div className="text-body4 text-t300 w-[30px]">{likedCount}</div>
        {IsBookMark ? (
          <BookMark_On
            onClick={handleBookMarkClick}
            className="mr-2 ml-4 cursor-pointer"
          />
        ) : (
          <BookMark_Off
            onClick={handleBookMarkClick}
            className="mr-2 ml-4 cursor-pointer"
          />
        )}
        <div className="text-body4 text-t300 w-[30px] mr-[-10px]">
          {BookMarkCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
