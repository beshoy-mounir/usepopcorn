import { useState, useEffect } from 'react';
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const APIKEY = `${process.env.REACT_APP_API_KEY}`;

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error('Something Went Wrong');
          const data = await res.json();
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError('');
        setIsLoading(false);
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
