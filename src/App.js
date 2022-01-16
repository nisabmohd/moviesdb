import './App.css';
import { Navbarcomp } from './components/Navbarcomp';
import { Home } from './components/Home';
import { Home2 } from './components/Home2';
import { Footer } from './components/Footer';
// import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { PopularMovies } from './components/PopularMovies';
import { Topmovies } from './components/Topmovies';
import { Nowmovies } from './components/Nowmovies';
import { Toptv } from './components/Toptv';
import { Nowtv } from './components/Nowtv';
import { Populartv } from './components/Populartv';
function App() {
  // const [pagination, SetPagination] = useState(1)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarcomp />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tv" element={<Home2  />} />
          <Route exact path="/popularmovies" element={<PopularMovies cat="movie" />} />
          <Route exact path="/topmovies" element={<Topmovies cat="movie"  />} />
          <Route exact path="/nowmovies" element={<Nowmovies cat="movie" />} />
          <Route exact path="/tv/populartv" element={<Populartv cat="tv" />} />
          <Route exact path="/tv/toptv" element={<Toptv cat="tv" />} />
          <Route exact path="/tv/nowtv" element={<Nowtv cat="tv" />} />

        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
