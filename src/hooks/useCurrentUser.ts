import { data } from 'autoprefixer';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface currentUserType {
  id: string;
  provider: string;
  email: string;
  username: string;
  blogname: string;
  image: string;
  createdAt: string;
  hasNotification: boolean;
}

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<currentUserType>();

  useEffect(() => {
    // useEffect를 사용하여 컴포넌트가 마운트된 후에 데이터를 가져옵니다.
    axios.get('/api/currentUser').then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  return currentUser;
};

export default useCurrentUser;
