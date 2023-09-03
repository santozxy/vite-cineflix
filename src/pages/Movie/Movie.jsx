import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from 'react-icons/fc'
import { Link } from "react-router-dom";

import './movie.css'
import Recommendations from './components/Recommendations/Recommendations'
import Loading from "../../components/Loading/Loading";

const moviesURL = import.meta.env.VITE_API_MOVIE;
const imageURL = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;


function Movie() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [productions, setProductions] = useState([]);
  const [genres, setGenres] = useState([]);

  async function getMovieDetails(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setDetail(response);
        setProductions(response.production_companies);
        setGenres(response.genres);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    const detailsURL = `${moviesURL}${id}?${apiKey}`;
    getMovieDetails(detailsURL);
  }, [id]);

  return (
    <section className="movie-details">
      <div className="back">
        <img src={imageURL + detail.backdrop_path} alt={detail.title} loading="lazy" />
      </div>
      <div className="details-container">
        <div className="details-content">
          <div className="details-1">
            <img src={imageURL + detail.poster_path} alt={detail.title} loading="lazy" />
            <div className="genres">
              <h3>Genres:</h3>
              {genres.map((genres) =>
                <div key={genres.id}>
                  <h3>{genres.name}</h3>
                </div>
              )}
            </div>
            <a href={detail.homepage} target="_blank">Visit Page Official</a>
          </div>

          <div className="details">
            <div className="titles">
              <h1>{detail.title}</h1>
              <h2>{detail.tagline}</h2>
            </div>
            <div className="overview">
              <p>{detail.overview}</p>

            </div>
            <h2>Rating <FcRating /> {detail.vote_average}</h2>
            <div className="productions-container">
              <h2>Productors</h2>
              <div className="productions">
                {productions.map((productions) => (
                  <h3 key={productions.id}>{productions.name}</h3>
                )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="recommendations-container">
          <h1>Recommended movies</h1>
          <Recommendations id={id} />
        </div>
      </div>


    </section>
  );
};

export default Movie;

