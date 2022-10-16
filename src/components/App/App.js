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
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function App() {

  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false)
  const [infoTooltipMessage, setIinfoTooltipMessage] = useState('');
  const isOpen = isInfoTooltipOpen

  useEffect(()=>{
    tokenCheck();
  },[])

  useEffect(()=>{
    if(loggedIn){
      mainApi.getUser()
      .then((res) => {
        setCurrentUser({name: res.data.name, email: res.data.email, id: res.data.id})
      })
      .catch(err => console.log(err))
    }

  },[loggedIn])



  function handleRegister( {name, email, password} ){
    mainApi.registrateUser( name, email, password )
    .then((data)=>{
      handleLogin( {email: email, password: password} )
      setIinfoTooltipMessage('вы успешно зарегистрировались')
      setIsInfoTooltipOpen(true)
      navigate("/signin")
    })
    .catch(message => {
      setIinfoTooltipMessage(message)
      setIsInfoTooltipOpen(true)
    })
  }

  function handleLogin( {email, password} ){
    mainApi.loginUser(email, password )
    .then((data)=>{
      storage.setItem('token', data.token);
      mainApi.setToken(data.token)
      // setCurrentUser()
      setLoggedIn(true)
      navigate("/movies")

    }) 
    .catch(message => {
      setIinfoTooltipMessage(message)
      setIsInfoTooltipOpen(true)
    })
  }

  function handleLogout() {
    storage.clear()
    setLoggedIn(false)
    navigate("/")
  }

  function handleUpdateUser (data){
    mainApi.setUserInformation(data)
    .then((res) => {
      setCurrentUser(res.data);
      setIinfoTooltipMessage('Профиль успешно обновлен')
      setIsInfoTooltipOpen(true)
    })
    .catch(res => {
      console.log(res)
      setIinfoTooltipMessage(res)
      setIsInfoTooltipOpen(true)
    });
  } 

  function tokenCheck() {
    let token = storage.getItem('token');
    if (token){
      mainApi.getContent(token)
      .then((res) =>{
        if(res.data.email){
          setLoggedIn(true)
          setCurrentUser({name: res.data.name, email: res.data.email})
          navigate("/movies")
        }
      })
    }
  }

  function closeAllPopups () {
    setIsInfoTooltipOpen(false)
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]) 


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn}/>}/>
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                loggedIn={loggedIn}
                setInfoTooltipMessage={setIinfoTooltipMessage}
                setIsInfoTooltipOpen={setIsInfoTooltipOpen}
              />
            </ProtectedRoute>
            }
          />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                loggedIn={loggedIn}
                setInfoTooltipMessage={setIinfoTooltipMessage}
                setIsInfoTooltipOpen={setIsInfoTooltipOpen}
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
            <Login handleLogin={handleLogin} loggedIn={loggedIn}/>}
          />
          <Route path='/signup' element={
            <Register handleRegister={handleRegister} loggedIn={loggedIn}/>}
          />
          <Route path='/popup' element={<h1>Popup</h1>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          message={infoTooltipMessage}
        />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
