import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';

export default function Home() {
  const { data: session } = useSession();

  const currentUser = useCurrentUser();

  console.log(currentUser);

  const router = useRouter();
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
      {currentUser && <div>{currentUser.createdAt}</div>}
      <button
        onClick={() => {
          axios.patch('/api/editProfile', {
            username: '유저이름',
            blogname: '블로그이름',
            image: '이미지',
          });
        }}
      >
        username 변경!
      </button>
    </div>
  );
}
