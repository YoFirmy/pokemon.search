import axios from 'axios';
import { useState } from 'react';

interface Resources {
  list: { pokemonList: string[] } | null;
}

const paths = {
  list: 'api/list',
};

const useInternalGetter = <K extends keyof Resources>(resource: K) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Resources[K] | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(paths[resource]);
    setData(data);
    setIsLoading(false);
  };

  return { isLoading, data, fetchData };
};

export default useInternalGetter;
