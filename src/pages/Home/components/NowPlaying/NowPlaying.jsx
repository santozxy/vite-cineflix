import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import {} from 'react-icons'

import "./nowPlaying.css";

const moviesURL = import.meta.env.VITE_API_NOW_PLAYING;
const imageURL = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  async function getNowPlaying(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setNowPlayingMovies(response.results.slice(8));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    const nowPlayingURL = `${moviesURL}?${apiKey}`;
    getNowPlaying(nowPlayingURL);
  }, []);

  return (
    <div className="now-playing">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        pagination={{
          clickable:true,
          dynamicBullets:true
        }}
        navigation={true}
        modules={[Pagination, EffectCreative]}
      >
        {nowPlayingMovies.length === 0 && <Loading />}
        {nowPlayingMovies.length > 0 &&
          nowPlayingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={imageURL + movie.backdrop_path}
                  alt={movie.title}
                  className="slide-item"
                  loading="lazy"
                />
                <div className="slide-text-cover">
                  <h1 className="title">{movie.title}</h1>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NowPlaying;
