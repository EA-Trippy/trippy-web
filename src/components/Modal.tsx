import React, {useEffect, useState} from "react";
import axios from "axios";

interface ModalPropType {
  modal: ModalType;
  setModalOpen: (inOpen: string) => void;
  modalOpen: string;
}

interface ModalType {
  hsize?: number;
  wsize?: number;
  /* 모달창 사이즈 조절 나중에 추가하면 수정해서 사용*/

  header: string /*모달 제목*/;
  content: string /*모달 내용*/;
}

const Modal = ({modal, setModalOpen, modalOpen}: ModalPropType) => {
  const [changeId, setChangeId] = useState("");

  const idChange = (e: any) => {
    setChangeId(e.target.value);
  };

  const closeModal = () => {
    setModalOpen("off");
  };

  const executeion = async (category: string) => {
    switch (category) {
      case "removeImage":
        axios.patch("/api/editProfile", {
          image: "/images/test-image.jpeg",
        });
      case "setName":
        axios.patch("/api/editProfile", {
          username: changeId,
        });
      case "setBlog":
        axios.patch("/api/editProfile", {
          userblog: changeId,
        });
    }
  };

  return (
    <div className="z-30 bg-black bg-opacity-20 flex justify-center items-center fixed top-0 left-0 w-full h-full">
      {modalOpen === "setName" || modalOpen === "setBlog" ? (
        <div className={`shadow-md h-[160px] w-[300px] bg-t100`}>
          <div className="mt-[10px] ml-[10px] text-body2">{modal.header}</div>
          <div className={`ml-[10px] h-[42px] flex items-center text-caption3 text-t300`}>{modal.content}</div>
          <input type="text" className="ml-[10px] h-[20px] w-[222px] border border-t300" onChange={idChange} />
          <div className="mr-[10px] mt-[26px] flex flex-row-reverse gap-[10px]">
            <button
              className="w-[48px] h-[24px] text-caption3 text-t100 bg-p200"
              onClick={() => {
                executeion(modalOpen);
                closeModal();
              }}
            >
              확인
            </button>
            <button className="w-[48px] h-[24px] text-caption3 bg-t200" onClick={closeModal}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className={`shadow-md h-[120px] w-[300px] bg-t100`}>
          <div className="mt-[10px] ml-[10px] text-body2">{modal.header}</div>
          <div className={`ml-[10px] h-[52px] flex items-center text-caption3 text-t300`}>{modal.content}</div>
          <div className="mr-[10px] flex flex-row-reverse gap-[10px]">
            <button
              className="w-[48px] h-[24px] text-caption3 text-t100 bg-p200"
              onClick={() => {
                executeion("removeImage");
                closeModal();
              }}
            >
              확인
            </button>
            <button className="w-[48px] h-[24px] text-caption3 bg-t200" onClick={closeModal}>
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
