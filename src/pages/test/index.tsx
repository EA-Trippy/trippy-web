import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';
import Image from 'next/image';
import useUser from '@/hooks/useUser';

export default function Home() {
  // const { data: session } = useSession();

  // const { data: currentUser } = useCurrentUser();

  const { data: fetchedUser } = useUser('64c36debeac3fde48e0e7c45');

  console.log('fetchedUser: ', fetchedUser);

  // const username = 'username test';
  // const blogname = 'blogname test3';
  // const image = 'http://www.codns.com/image/url11.png';

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
      {/* <button
        onClick={() => {
          axios.patch('/api/editProfile', {
            username,
            blogname,
            // image,
          });
        }}
      >
        username 변경!
      </button>
      <div>{currentUser?.username}</div>
      <div>{currentUser?.blogname}</div> */}
      {/* <Image src={currentUser?.image} alt={'image'} width={200} height={200} /> */}
    </div>
  );
}
