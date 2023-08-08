import Image from "next/image";
import Link from "next/link";
import Plus from "../../public/icons/plus.svg";
import { useState } from "react";

interface CommentPropType {
  comment: CommentType;
}

interface CommentListPropType {
  data: CommentType[];
}

interface CommentType {
  body: string;
  profile_image: string;
  blogName: string;
  date: string;
}

const Comment = (props: CommentPropType) => {
  const { comment } = props;
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedBody, setEditedBody] = useState(comment.body);

  const handleRemoveClick = () => {
    setIsRemoveOpen(!isRemoveOpen);
  };

  const handelModalNo = () => {
    setIsRemoveOpen(!isRemoveOpen);
  };

  const handelModalYes = () => {
    setIsRemoveOpen(!isRemoveOpen);
    setShowToast(true); // Show the toast message
    setTimeout(() => {
      setShowToast(false); // Hide the toast message after a certain time (e.g., 3000ms)
    }, 3000); // Adjust the time as needed
  };

  const RemoveToast = () => {
    setShowToast(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleEditSave = () => {
    setIsEditMode(false);
  };

  const toastMessage = showToast && (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 z-50">
      <div className="flex items-center border border-t200 pl-5 py-2 mb-4 bg-white rounded-lg shadow">
        <div className="text-center text-body1 text-t400">
          해당 댓글이 삭제되었습니다.
        </div>
        <button
          className="bg-white text-gray-400 hover:text-gray-900 rounded-lg hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 ml-2 mr-1"
          onClick={RemoveToast}
        >
          x
        </button>
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={comment.profile_image}
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
                {comment.blogName}
              </div>
            </Link>
            <div className="text-t200 text-body1">{comment.date}</div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="text-t300 text-body1 mr-1"
            onClick={handleEditClick}
          >
            수정
          </button>
          <p className="text-t300 text-body1">|</p>
          <button
            onClick={handleRemoveClick}
            className="text-t300 text-body1 ml-1"
          >
            삭제
          </button>
          {isRemoveOpen && (
            <div className="h-screen w-full fixed left-0 top-0 flex items-center justify-center bg-black bg-opacity-70 text-center">
              <div className="bg-white rounded-2xl w-11/12 md:w-1/3">
                <p className="text-h2 text-t500 ml-5 mt-10">댓글 삭제</p>
                <p className="text-h3 text-t400 ml-5 mt-10">
                  정말로 삭제하시겠습니까?
                </p>
                <div className="flex items-center justify-end mr-5 mt-10 my-3">
                  <button
                    className="border border-p200 bg-p200 px-6 rounded-lg text-center py-2 text-t100"
                    onClick={handelModalYes}
                  >
                    예
                  </button>

                  <button
                    className="border border-t200 px-3 rounded-lg text-center mr-2 py-2 ml-2"
                    onClick={handelModalNo}
                  >
                    아니오
                  </button>
                </div>
              </div>
            </div>
          )}
          {toastMessage}
        </div>
      </div>
      {isEditMode ? (
        <div>
          <div className="flex items-center justify-center">
            <textarea
              className="mt-5 p-2 border rounded-md w-11/12 h-40 mb-5"
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-5 mt-3">
            <button
              className="text-p200 text-subtitle1 w-15 h-10 p-2 hover:bg-gray-100 rounded-lg"
              onClick={handleEditSave}
            >
              <p className="mt-[1.5px]">취소</p>
            </button>
            <button
              className="w-[112px] h-10 bg-p200 text-subtitle1 text-t100 text-center rounded-lg ml-2"
              onClick={handleEditSave}
              type="submit"
            >
              <p className="mt-1">답글 수정</p>
            </button>
          </div>
        </div>
      ) : (
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
      )}
      <hr className="border border-[#F5F5F5]" />
    </div>
  );
};

const CommentList = (props: CommentListPropType) => {
  const { data } = props;

  return (
    <div className="mt-10">
      {data?.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
