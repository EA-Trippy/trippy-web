import Image from 'next/image';
import { Inter } from 'next/font/google';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  console.log('session', session);

  return (
    <div className="flex flex-col">
      <button onClick={() => signIn('kakao')}>Sign In</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
