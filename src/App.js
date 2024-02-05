import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Filter from "./Component/Filter.js";
import MovieList from "./Component/MovieList.js";
import MovieDescription from "./Component/MovieDescription.js";
import AddMovie from "./Component/AddMovie.js"; // Import the new component
import moviesData from "./Component/MoviesData.js";
import FirstPage from "./Component/FirstPage.js";
import SecondPage from "./Component/SecondPage.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState(moviesData);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    // Add the new movie to the list
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleNavigateToPage2 = () => {
    // Add your logic to navigate to the second page
    // For now, this just logs a message
    console.log("Navigating to Page 2");
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  onSearch={handleSearch}
                  setFilteredMovies={setFilteredMovies}
                />
                <AddMovie onAddMovie={handleAddMovie} />
                <FirstPage
                  first12Movies={
                    filteredMovies.length > 0
                      ? filteredMovies
                      : movies.slice(0, 12)
                  }
                  setFilteredMovies={setFilteredMovies}
                />
                <button onClick={handleNavigateToPage2}>Go to Page 2</button>
              </>
            }
          />
          <Route
            path="/page2"
            element={
              <SecondPage
                second12Movies={
                  filteredMovies.length > 0
                    ? filteredMovies.slice(12, 24)
                    : movies.slice(12, 24)
                }
                setFilteredMovies={setFilteredMovies}
              />
            }
          />
          <Route
            path="/movie/:title"
            element={({ match }) => {
              const selectedMovie = movies.find(
                (movie) => movie.title === match.params.title
              );
              return <MovieDescription movie={selectedMovie} />;
            }}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App