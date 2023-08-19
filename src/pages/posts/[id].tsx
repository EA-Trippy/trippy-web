import Header from "@/components/Header";
import CommentList from "@/components/Comment";
import Post from "../../components/Post";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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

  const [DetailComment, setDetailComment] = useState([]);
  //const [DetailPost, setDetailPost] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        const responseComment = await axios.get(`/api/comments?postId=${id}`);
        //console.log(id);
        setDetailPost(response.data);
        setDetailComment(responseComment.data);
        // setLikedCount(response.data.likedIds.length); // Update the liked count
        // setBookMarkCount(response.data.bookmarkedIds.length);
        // setTag(response.data.tag);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    //console.log(DetailPost);
  }, [id, DetailComment]);

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white mb-20">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-20">
            <div className="mx-20 mt-10">
              <Post post={DetailPost} />
              <CommentList data={DetailComment} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePost;
