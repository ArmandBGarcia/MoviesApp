import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Searching from "./components/Searching";
import Favorites from "./components/Favorites.jsx";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Searching />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
