import { useEffect, useState } from 'react';

export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + '/' + type)
      .then(res => res.json())
      .then((res) => setData(res))
  }

  useEffect(() => {
    fetchUrl(initialType)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    fetchUrl,
  };
}