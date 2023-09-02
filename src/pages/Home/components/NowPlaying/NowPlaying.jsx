import React, { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard/MovieCard";
import Loading from "../../../../components/Loading/Loading";

const moviesURL = import.meta.env.VITE_API_NOW_PLAYING;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  async function getNowPlaying(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setNowPlayingMovies(response.results.slice(10));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    const nowPlayingURL = `${moviesURL}?${apiKey}`;
    getNowPlaying(nowPlayingURL);
  }, []);

  return (
    <div className="now-playing">
      <h1>Most Now Playing</h1>
      <div className="now-playing-content">
        {nowPlayingMovies.length === 0 && <Loading />}
        {nowPlayingMovies.length > 0 &&
          nowPlayingMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default NowPlaying;
