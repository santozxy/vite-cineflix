import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import Loading from "../../../../components/Loading/Loading";
import "./recommendationsMovies.css";

const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

function Recommendations({ id }) {
    const [recommendationsMovies, setRecommendationsMovies] = useState([]);
    //Obtendo os Filmes Recomendados
    async function getRecommendationsMovies(url) {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setRecommendationsMovies(response.results);
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        const RecommendationsMoviesURL = `${moviesURL}${id}/recommendations?${apiKey}&page=1`;
        getRecommendationsMovies(RecommendationsMoviesURL);
    }, []);

    return (
        <div className="recommendations-movies">
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                pagination={false}
                navigation={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {recommendationsMovies.length === 0 && <Loading />}
                {recommendationsMovies.length > 0 &&
                    recommendationsMovies.map((movie) => (
                        <SwiperSlide key={movie.id} className="swiper-slide">
                            <Link to={`/movie/${movie.id}`}>
                                <img src={imageURL + movie.poster_path} alt={movie.title} className="poster-img" />
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default Recommendations;
