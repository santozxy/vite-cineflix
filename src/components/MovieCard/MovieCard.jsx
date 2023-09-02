import { Link } from "react-router-dom";
import "./movieCard.css";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageURL + movie.poster_path} alt={movie.title} />
      </Link>
    </div>
  );
};

export default MovieCard;
