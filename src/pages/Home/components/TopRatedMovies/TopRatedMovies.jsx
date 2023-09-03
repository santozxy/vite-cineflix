import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import Loading from "../../../../components/Loading/Loading";
import "./topRatedMovies.css";



const moviesURL = import.meta.env.VITE_API_TOP_RATED;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  async function getTopRatedMovies(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTopRatedMovies(response.results);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    const TopRatedMoviesURL = `${moviesURL}?${apiKey}`;
    getTopRatedMovies(TopRatedMoviesURL);
  }, []);

  return (
    <div className="top-rated-movies">
      <h1>Most TopRated Movies</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={false}
        navigation={true}
      >
        {topRatedMovies.length === 0 && <Loading />}
        {topRatedMovies.length > 0 &&
          topRatedMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`} >
                <img src={imageURL + movie.poster_path} alt={movie.title} className="slide-img" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default TopRatedMovies;
