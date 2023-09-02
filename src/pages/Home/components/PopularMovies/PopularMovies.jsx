import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import Loading from "../../../../components/Loading/Loading";
import "./popularMovies.css";



const moviesURL = import.meta.env.VITE_API_POPULAR_MOVIES;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function getPopularMovies(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPopularMovies(response.results);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    const popularMoviesURL = `${moviesURL}?${apiKey}`;
    getPopularMovies(popularMoviesURL);
  }, []);

  return (
    <div className="popular-movies">
      <h1>Most Popular Movies</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={false}
        navigation={true}
        modules={[Pagination]}
      >
        {popularMovies.length === 0 && <Loading />}
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={imageURL + movie.poster_path} alt={movie.title} className="slide-img" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default PopularMovies;
