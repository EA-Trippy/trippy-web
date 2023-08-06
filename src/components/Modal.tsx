import React from "react";

interface ModalPropType {
  modal: ModalType;
  setModalOpen: (inOpen: boolean) => void;
}

interface ModalType {
  hsize?: number;
  wsize?: number;
  /* 모달창 사이즈 조절 나중에 추가하면 수정해서 사용*/

  header: string /*모달 제목*/;
  content: string /*모달 내용*/;
}

const Modal = ({modal, setModalOpen}: ModalPropType) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="z-30 bg-black bg-opacity-20 flex justify-center items-center fixed top-0 left-0 w-full h-full">
      <div className={`shadow-md h-[120px] w-[300px] bg-t100`}>
        <div className="mt-[10px] ml-[10px] text-body2">{modal.header}</div>
        <div className={`ml-[10px] h-[52px] flex items-center text-caption3 text-t300`}>{modal.content}</div>
        <div className="mr-[10px] flex flex-row-reverse gap-[10px]">
          <button className="w-[48px] h-[24px] text-caption3 text-t100 bg-p200" onClick={closeModal}>
            확인
          </button>
          <button className="w-[48px] h-[24px] text-caption3 bg-t200" onClick={closeModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
