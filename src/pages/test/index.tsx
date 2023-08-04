import usePost from '@/hooks/usePost';
import usePosts from '@/hooks/usePosts';
import { data } from 'autoprefixer';
import axios from 'axios';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function Home() {
  const body = '1번 댓글';

  const { data: posts, refetch: refetchPosts } = usePost(
    '64ccb66c9d1f3616a855a908'
  );

  console.log(posts);

  const onClick = useCallback(async () => {
    // try {
    //   await axios
    //     .post('/api/comments', {
    //       body: 'Comment Patch 2',
    //       commentId: '64ccb7009d1f3616a855a909',
    //     })
    //     .then((res) => console.log(res));
    // } catch (error) {
    //   console.log(error);
    // }
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
      {/* {posts && posts.map((res: any) => <div key={res.id}>{res.body}</div>)} */}
    </div>
  );
}
