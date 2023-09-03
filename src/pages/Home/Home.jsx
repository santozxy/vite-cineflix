import PopularMovies from './components/PopularMovies/PopularMovies';
import NowPlaying from './components/NowPlaying/NowPlaying';
import "./home.css"
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies';


function Home() {
  return (
    <section className="home">
      <NowPlaying />
      <div className="container">
        <PopularMovies />
      </div>
      <div className="container">
        <TopRatedMovies />
      </div>
    </section>
  );
}

export default Home;
