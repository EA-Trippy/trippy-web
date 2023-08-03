import fetcher from '@/libs/fetcher';
import { useQuery } from '@tanstack/react-query';

const useUser = (userId: string) => {
  const queryKey = `/api/user/${userId}`;

  const { data, error, isLoading } = useQuery([queryKey], () =>
    fetcher(queryKey)
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useUser;
