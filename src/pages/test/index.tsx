import usePost from '@/hooks/usePost';
import usePosts from '@/hooks/usePosts';
import { data } from 'autoprefixer';
import axios from 'axios';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function Home() {
  const body = '베베베베베베123123';

  const { data: posts, refetch: refetchPosts } = usePosts();

  const onClick = useCallback(async () => {
    try {
      // await axios.post('/api/posts', {
      //   body,
      // });
      // refetchPosts();
      await axios
        .get('api/airports', {})
        .then((res) => console.log('res:', res.data));
    } catch (error) {
      console.log(error);
    }
  }, [body, refetchPosts]);

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
      <button onClick={onClick}>버튼버튼버튼버튼버튼버튼버튼버튼버튼</button>
      {posts && posts.map((res: any) => <div key={res.id}>{res.body}</div>)}
    </div>
  );
}
