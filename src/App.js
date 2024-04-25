import React from "react";

import useMovies from "./custom-hooks/getMovies";

import Header from "./components/Header";
import { Box, Grid, Toolbar } from "@mui/material";
//import Footer from "./components/Footer";
import { Whatshot } from "@mui/icons-material";

const App = () => {
  const [movies, error] = useMovies([]);

  const posterImg = "https://image.tmdb.org/t/p/w300";
  const posterUnavailable =
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  if (error) {
    return <p>Something went wrong. Can't get any movies</p>;
  }

  return (
    <Box>
      <Header />
      {/* Toolbar is used just to deal with fixed placement */}
      <Toolbar />
      <Box
        paddingTop="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1>
          <Whatshot fontSize="large" style={{ color: "red" }} />
          TRENDING MOVIES
        </h1>

        <Grid container direction="row" justifyContent="center">
          {movies.map((movie) => {
            const movieName = movie.original_title;
            const movieId = movie.id;
            const moviePoster = movie.poster_path;
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                align="center"
                key={movieId}
                style={{ border: "2px solid grey", backgroundColor: "yellow" }}
              >
                <img
                  src={
                    moviePoster
                      ? posterImg + `${moviePoster}`
                      : posterUnavailable
                  }
                  style={{ maxHeight: "70%", width: "auto" }}
                  alt="Movie poster"
                />
                <p>{movieName}</p>
                <p>{movieId}</p>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {/* <Toolbar />
      <Footer /> */}
    </Box>
  );
};

export default App;
