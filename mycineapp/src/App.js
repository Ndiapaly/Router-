import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddMovieForm from "./components/AddMovieForm";
import Filter from "./components/Filter";
import MovieDetail from "./components/MovieDetail"; // Composant qui affiche les détails d'un film
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    {
      title: "Movie 1",
      description: "Description 1",
      posterURL: "url1",
      rating: 4.5,
    },
    {
      title: "Movie 2",
      description: "Description 2",
      posterURL: "url2",
      rating: 4.0,
    },
    // Ajoutez plus de films si nécessaire
  ];

  return (
    <Router>
      <div className="App">
        <Filter />
        <AddMovieForm />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route
            path="/movie/:title"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
