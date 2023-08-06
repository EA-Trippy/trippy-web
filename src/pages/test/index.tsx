// /pages/index.js or another component

import axios from 'axios';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const Upload = () => {
  const router = useRouter();

  const fileInput = useRef(null);

  const handleUpload = async () => {
    const files = fileInput.current.files;
    const formData = new FormData();

    // 이미지 파일 추가
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    await axios
      .post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 중요: 멀티파트(form-data) 형식으로 보내기 위해 헤더 설정
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => signIn()}>Sign In</button>
      <button
        onClick={() => {
          signOut();
          router.push('/test');
        }}
      >
        Sign out
      </button>
      <input type="file" ref={fileInput} multiple />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
