import fetcher from '@/libs/fetcher';
import { useQuery } from '@tanstack/react-query';

const usePost = (postId: string) => {
  const queryKey = postId && `/api/posts/${postId}`;

  const { data, isLoading, error, refetch } = useQuery([queryKey], () =>
    fetcher(queryKey)
  );

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default usePost;
