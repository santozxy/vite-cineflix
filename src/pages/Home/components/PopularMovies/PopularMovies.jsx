import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading/Loading";
import "./popularMovies.css";
import MovieCard from "../../../../components/MovieCard/MovieCard";

const moviesURL = import.meta.env.VITE_API_POPULAR_MOVIES;
const apiKey = import.meta.env.VITE_API_KEY;

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function getPopularMovies(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPopularMovies(response.results.slice(10));
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    const popularMoviesURL = `${moviesURL}?${apiKey}`;
    getPopularMovies(popularMoviesURL);
  }, []);

  return (
    <div className="top-rated">
      <h1>Most Popular Movies</h1>
      <div className="top-rated-content">
        {popularMovies.length === 0 && <Loading />}
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default PopularMovies;
