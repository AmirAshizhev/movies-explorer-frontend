import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useState, useEffect} from 'react';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import { useState } from 'react';
// import moviesApi from '../../utils/MoviesApi';

function App() {

  const navigate = useNavigate();
  const [userData, setUserData]= useState('')
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


  function handleRegister({ name, email, password }){
    mainApi.registrateUser( name, email, password )
    .then((data)=>{
      console.log(data)
      navigate("/signin")
    })
  }

  function handleLogin({ email, password }){
    mainApi.loginUser(email, password )
    .then((data)=>{
      console.log(data)
      localStorage.setItem('token', data.token);
      mainApi.setToken(data.token)
      // setLoggedIn(true)
      navigate("/movies")

    }) 

  }

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
        <Route path='/signin' element={
          <Login handleLogin={handleLogin} />}
        />
        <Route path='/signup' element={
          <Register handleRegister={handleRegister}/>}
        />
        <Route path='/popup' element={<h1>Popup</h1>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
