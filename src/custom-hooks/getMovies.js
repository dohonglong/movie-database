import { useEffect, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  const api_key = "ea7cb8c197cc43af7e370659fb26bc18";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/collection/39199?api_key=${api_key}&language=en-US`
        );
        const data = await response.json();
        const movies = data.parts;
        const sortedMovies = [...movies].sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        //console.log(sortedMovies);
        setMovies(sortedMovies);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, []);

  return [movies, error];
};

export default useMovies;
