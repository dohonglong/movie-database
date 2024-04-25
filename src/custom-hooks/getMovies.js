import { useEffect, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  const api_key = "ea7cb8c197cc43af7e370659fb26bc18";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=3`
        );
        const data = await response.json();
        // console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, []);

  return [movies, error];
};

export default useMovies;
