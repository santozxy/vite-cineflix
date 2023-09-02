import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// register Swiper custom elements

import "./home.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
    setLoading(true);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h1>The Best Movies</h1>
      <div className="movies-container">
       {topMovies.length === 0 && <p>Carregando...</p>}
       {topMovies.length > 0 && topMovies.map((movie) => <h2>{movie.title}</h2>)}
      </div>
    </div>
  );
}

export default Home;
