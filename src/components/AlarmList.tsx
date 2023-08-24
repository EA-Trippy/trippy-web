import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NewPostPropType {
  post: PostType;
}

interface NewPostListPropType {
  data: PostType[];
}

interface PostType {
  id: string;
  body: string;
  createdAt: string;
  postId: string;
  sender: string;
  receiver: string;
  isRead: boolean;
}

interface AlarmPropType extends NewPostPropType {
  onDelete: (deletedId: string) => void;
}

const Alarm = (props: AlarmPropType) => {
  const { post, onDelete } = props;
  const [userImage, setUserImage] = useState("");
  const [IsComment, setIsComment] = useState(true);

  useEffect(() => {
    const fetchUserImage = async () => {
      console.log(post.id);
      try {
        const response = await axios.get(`/api/user/${post.sender}`);
        setUserImage(response.data.image);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchComment = async () => {
      if (post.body.includes("댓글")) {
        setIsComment(false);
      }
    };

    fetchComment();
    fetchUserImage();
  }, [post.sender, post.body, post.id]);

  const deleteAlarm = async () => {
    try {
      await axios.delete(`/api/notifications/userId=${post.receiver}`, {
        data: { notificationId: post.id },
      });
      onDelete(post.id);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // const PatchAlarm = async () => {
  //   try {
  //     await axios.patch(`/api/notifications`, {
  //       Notification : post.id;
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  const formatTimeAgo = (createdAt: string) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = Math.floor(
      (currentTime.getTime() - createdTime.getTime()) / 1000
    ); // in seconds

    if (timeDiff < 60) {
      return `${timeDiff}초 전`;
    } else if (timeDiff < 3600) {
      const minutes = Math.floor(timeDiff / 60);
      return `${minutes}분 전`;
    } else if (timeDiff < 86400) {
      const hours = Math.floor(timeDiff / 3600);
      return `${hours}시간 전`;
    } else {
      const days = Math.floor(timeDiff / 86400);
      return `${days}일 전`;
    }
  };

  return (
    <div className="hover:bg-[#EEEEEE]">
      <div className="flex pl-2 py-1">
        <div className="min-w-[65px] relative">
          <Image
            src={userImage}
            alt="Profile"
            width={48}
            height={48}
            className="w-12 h-12 cursor-pointer rounded-full"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
          {IsComment ? (
            <Image
              alt="Heart"
              src={"/icons/heart.svg"}
              width={20}
              height={20}
              className="absolute bottom-0 right-3"
            />
          ) : (
            <Image
              alt="Heart"
              src={"/icons/comment.svg"}
              width={20}
              height={20}
              className="absolute bottom-0 right-3"
            />
          )}
        </div>
        {/* <div onClick={PatchAlarm}> */}
        <Link href={`/posts/${post.postId}`}>
          <div className="w-[250px]">
            <div className="text-caption1">{post.body}</div>
            <div className="text-caption3 text-p200">
              {formatTimeAgo(post.createdAt)}
            </div>
          </div>
        </Link>
        {/* </div> */}
        <div className="ml-5 mt-[-4px]">
          <button onClick={deleteAlarm} className="text-t200">
            x
          </button>
        </div>
      </div>
      <hr className="border border-[#EEEEEE]" />
    </div>
  );
};

const AlarmList = (props: NewPostListPropType) => {
  const { data } = props;

  const [alarms, setAlarms] = useState(data); // Maintain state for alarms

  const handleDelete = (deletedId: string) => {
    setAlarms((prevAlarms) =>
      prevAlarms.filter((alarm) => alarm.id !== deletedId)
    );
  };

  return (
    <div className="absolute top-12 right-0 cursor-pointer w-[360px] z-50">
      <div
        className="alarm-bubble rounded-sm shadow mt-2"
        style={{ maxHeight: "290px", overflowY: "auto" }}
      >
        {alarms?.map((post, index) => {
          return <Alarm key={index} post={post} onDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default AlarmList;
