import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

import './search.css'
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMG;

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  async function getSearchMovies(url) {
    //Obtendo os filmes em cartazes
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    const searchMovies = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchMovies);
  }, [query]);


  return (
    <section className="search">
      <h1>Search results for: <span>{query}</span></h1>
      <div className="search-container">
        {movies.filter(movie => movie.poster_path !== null).map(filteredMovie =>
          <Link
            to={`/movie/${filteredMovie.id}`}
            key={filteredMovie.id}
            className="search-card"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={imageURL + filteredMovie.poster_path} alt={filteredMovie.title} />
            <h2>{filteredMovie.rated}</h2>
          </Link>
        )}
      </div>
    </section>
  )
}

export default Search