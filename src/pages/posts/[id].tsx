import Header from "@/components/Header";
import CommentList from "@/components/Comment";
import Post from "../../components/Post";
import NotLoginPost from "@/components/NotLoginPost";
import NotLoginCommentList from "@/components/NotLoginCommentList";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";

const OnePost = () => {
  const [DetailPost, setDetailPost] = useState({
    id: "",
    title: "",
    bodyHTML: "",
    createdAt: "",
    user: {
      username: "",
      image: "",
    },
    tag: [],
    likedIds: [],
    bookmarkedIds: [],
    comments: [],
  });

  const [NotLoginDetailPost, setNotLoginDetailPost] = useState({
    id: "",
    title: "",
    bodyHTML: "",
    createdAt: "",
    user: {
      username: "",
      image: "",
    },
    tag: [],
    comments: [],
  });

  const [DetailComment, setDetailComment] = useState([]);
  const [NotLoginDetailComment, setNotLoginDetailComment] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        const responseComment = await axios.get(`/api/comments?postId=${id}`);
        setDetailPost(response.data);
        setDetailComment(responseComment.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchNotLoginData = async () => {
      try {
        const notLoginResponse = await axios.get(`/api/posts/${id}`);
        const notLoginResponseComment = await axios.get(
          `/api/comments?postId=${id}`
        );
        setNotLoginDetailPost(notLoginResponse.data);
        setNotLoginDetailComment(notLoginResponseComment.data);
        // console.log(notLoginResponse.data);
        // console.log(notLoginResponseComment.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      if (session) {
        fetchData();
      } else {
        fetchNotLoginData();
      }
    }
  }, [id, session, DetailComment]);

  if (session) {
    return (
      <>
        <div className="relative w-screen min-h-screen bg-white mb-20">
          <Header title={"trippy"}></Header>
          <div className="mx-20">
            <div className="mx-20 mt-10">
              <Post post={DetailPost} />
              <CommentList data={DetailComment} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="relative w-screen min-h-screen bg-white mb-20">
          <Header title={"trippy"}></Header>
          <div className="mx-20">
            <div className="mx-20 mt-10">
              <NotLoginPost post={NotLoginDetailPost} />
              <NotLoginCommentList data={NotLoginDetailComment} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default OnePost;
