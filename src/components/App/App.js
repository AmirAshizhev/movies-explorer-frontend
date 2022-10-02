import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies/>}/>
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
