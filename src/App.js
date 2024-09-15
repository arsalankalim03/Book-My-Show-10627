
import './App.css';
import axios from 'axios';

//Routing
import { Routes, Route } from "react-router-dom";

//React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Homepage from './pages/Home.page';
import Moviepage from './pages/Movie.page';
import Playpage from './pages/Play.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/movie/:id' element={<Moviepage />}></Route>
      <Route path='/plays' element={<Playpage />}></Route>
    </Routes>
  );
}

export default App;
