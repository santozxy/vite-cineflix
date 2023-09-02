import PopularMovies from './components/PopularMovies/PopularMovies';
import NowPlaying from './components/NowPlaying/NowPlaying';
import "./home.css"


function Home() {
  return (
   <section className="home">
    <div className="container">
      <NowPlaying/>
    </div>
    <div className="container">
      <PopularMovies/>
    </div>
   </section>
  );
}

export default Home;
