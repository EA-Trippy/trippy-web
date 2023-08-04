import fetcher from '@/libs/fetcher';
import { useQuery } from '@tanstack/react-query';

const usePosts = (userId?: string) => {
  const queryKey = userId ? `/api/posts?userId=${userId}` : '/api/posts';
  // console.log(queryKey);
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

export default usePosts;
