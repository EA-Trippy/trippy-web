import axios from 'axios';

async function fetcher(queryKey: string) {
  const url = queryKey;

  const { data } = await axios.get(url).then((res) => res);

  return data;
}

export default fetcher;
