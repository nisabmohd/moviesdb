import './App.css';
import { Navbarcomp } from './components/Navbarcomp';
import { Home } from './components/Home';
import { Home2 } from './components/Home2';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Discoverpage } from './components/Discoverpage';
import { Searchpage } from './components/Searchpage';
import { Detailedmovie } from './components/Detailedmovie';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarcomp />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tv" element={<Home2 />} />
          <Route exact path="/popularmovies" element={<Discoverpage cat="movie" endpoint="popular" header="Pouplar Movies" />} />
          <Route exact path="/topmovies" element={<Discoverpage cat="movie" endpoint="top_rated" header="Top-Rated Movies" />} />
          <Route exact path="/nowmovies" element={<Discoverpage cat="movie" endpoint="now_playing" header="Now Playing Movies" />} />
          <Route exact path="/tv/populartv" element={<Discoverpage cat="tv" endpoint="popular" header="Pouplar TV Shows" />} />
          <Route exact path="/tv/toptv" element={<Discoverpage cat="tv" endpoint="top_rated" header="Top-Rated TV Shows" />} />
          <Route exact path="/tv/nowtv" element={<Discoverpage cat="tv" endpoint="now_playing" header="Now Playing TV shows" />} />
          <Route exact path="/search" element={<Searchpage/>} />
          <Route path="/details" element={<Detailedmovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
