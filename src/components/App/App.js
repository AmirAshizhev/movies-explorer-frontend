import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect} from 'react';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
// import moviesApi from '../../utils/MoviesApi';

function App() {

  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   moviesApi.getCards()
  //   .then((cards) => {
  //     setCards(cards)
  //     console.log(cards)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={
          <Movies
            // cards={cards}
          />}
        />
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/popup' element={<h1>Popup</h1>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
