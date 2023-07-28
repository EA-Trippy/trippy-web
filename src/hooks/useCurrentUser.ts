import fetcher from '@/libs/fetcher';
import { useQuery } from '@tanstack/react-query';

const useCurrentUser = () => {
  const queryKey = 'api/currentUser';

  const { data, isLoading, error } = useQuery([queryKey], () =>
    fetcher(queryKey)
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useCurrentUser;
