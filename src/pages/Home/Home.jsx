import PopularMovies from './components/PopularMovies/PopularMovies'
import NowPlaying from './components/NowPlaying/NowPlaying';


function Home() {
  return (
   <section className="home">
    <div className="popular-movies">
      <NowPlaying/>
    </div>
    <div className="best-rated">
      <PopularMovies/>
    </div>
   </section>
  );
}

export default Home;
