import Image from "next/image";
import Link from "next/link";
import Plus from "../../public/icons/plus.svg";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface CommentPropType {
  comment: CommentType;
}

interface CommentListPropType {
  data: CommentType[];
}

interface CommentType {
  id: string;
  body: string;
  user: {
    blogname: string;
    image: string;
  };
  createdAt: string;
}

const Comment = (props: CommentPropType) => {
  const { comment } = props;

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={comment.user.image}
                className="w-[52px] h-[52px] rounded-full mr-2"
                alt="Profile Image"
                width={52}
                height={52}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="text-t500 text-body4 mt-1">
                {comment.user.blogname}
              </div>
            </Link>
            <div className="text-t200 text-body1">{comment.createdAt}</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-t500 text-body1 mt-5">{comment.body}</p>
        <div className="flex items-center mt-5 mb-3">
          <div className="w-[60px] h-[30px] bg-p200 text-body2 text-t100 rounded-xl flex items-center justify-between px-2">
            <Plus />
            <p className="mt-[1px]">답글</p>
          </div>
          <p className="text-subtitle3 text-p200 ml-3 mt-1">0개의 답글</p>
        </div>
      </div>
      <hr className="border border-[#F5F5F5]" />
    </div>
  );
};

const NotLoginCommentList = (props: CommentListPropType) => {
  const { data } = props;
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mt-10">
      <div className="text-body1 text-t300">{data.length}개의 댓글</div>

      {data?.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default NotLoginCommentList;
