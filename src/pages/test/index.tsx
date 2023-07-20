import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session } = useSession();
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
      {session && (
        <>
          <div>{session?.user?.id}</div>
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
          <Image
            src={session?.user.image!}
            width={100}
            height={100}
            alt="image"
            priority
          />
          <div>{session?.user?.provider}</div>
        </>
      )}
    </div>
  );
}
