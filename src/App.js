import React from "react";

import Header from "./components/Header";
import { Box, Toolbar } from "@mui/material";
//import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";

const App = () => {
  return (
    <Box>
      <Header />
      {/* Toolbar is used just to deal with fixed placement */}
      <Toolbar />

      <Routes>
        <Route index path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
