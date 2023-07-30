import fetcher from '@/libs/fetcher';
import { useMutation, useQuery } from '@tanstack/react-query';

const usePosts = (userId?: string) => {
  const queryKey = userId ? `/api/posts?userId=${userId}` : '/api/posts';

  const { data, isLoading, error, refetch } = useQuery([queryKey], () =>
    fetcher(queryKey)
  );

  console.log('data:', data);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default usePosts;
