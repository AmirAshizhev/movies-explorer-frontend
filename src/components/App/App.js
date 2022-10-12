import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { storage } from '../../utils/helpers';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {

  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    tokenCheck();
  },[])

  useEffect(()=>{
    // console.log(loggedIn)
    if(loggedIn){
      mainApi.getUser()
      .then((res) => {
        // console.log(res.data)
        setCurrentUser({name: res.data.name, email: res.data.email})
      })
      .catch(err => console.log(err))
    }

  },[loggedIn])



  function handleRegister( {name, email, password} ){
    mainApi.registrateUser( name, email, password )
    .then((data)=>{
      // console.log(data)
      handleLogin( {email: email, password: password} )
      navigate("/signin")
    })
    .catch(err => console.log(err))
  }

  function handleLogin( {email, password} ){
    mainApi.loginUser(email, password )
    .then((data)=>{
      console.log(data)
      storage.setItem('token', data.token);
      mainApi.setToken(data.token)
      // setCurrentUser()
      setLoggedIn(true)
      navigate("/movies")

    }) 
    .catch(err => console.log(err))
  }

  function handleLogout() {
    // localStorage.removeItem('token');
    storage.clear()
    setLoggedIn(false)
    navigate("/")
  }

  function handleUpdateUser (data){
    mainApi.setUserInformation(data)
    .then((res) => {
      setCurrentUser(res.data);
    })
    .catch(res => console.log(res));
  } 

  function tokenCheck() {
    let token = storage.getItem('token');
    console.log(token)
    if (token){
      mainApi.getContent(token)
      .then((res) =>{
        console.log(res.data.name)
        if(res.data.email){
          setLoggedIn(true)
          setCurrentUser({name: res.data.name, email: res.data.email})
          navigate("/movies")
        }
      })
    }
  }

  console.log(currentUser)

  // function handleDeleteMovie(movie) {
  //   mainApi.deleteMovie(movie._id)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn}/>}/>
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                loggedIn={loggedIn}
              />
            </ProtectedRoute>
            }
          />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                loggedIn={loggedIn}
                // handleDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>
          }/>
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile 
                handleLogout={handleLogout} 
                handleUpdateUser={handleUpdateUser}
                loggedIn={loggedIn}
              />
            </ProtectedRoute>         
          }/>
          <Route path='/signin' element={
            <Login handleLogin={handleLogin} />}
          />
          <Route path='/signup' element={
            <Register handleRegister={handleRegister}/>}
          />
          <Route path='/popup' element={<h1>Popup</h1>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
