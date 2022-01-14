import './App.css';
import { Navbarcomp } from './components/Navbarcomp';
import { Home } from './components/Home';
import Paginationc from './components/Paginationc';
import { useState } from 'react';
function App() {
  const [pagination,SetPagination]=useState(1)
  return (
    <div className="App">
      <Navbarcomp />
      <Home page={pagination}/>
      <Paginationc page={pagination}/>
    </div>
  );
}

export default App;
