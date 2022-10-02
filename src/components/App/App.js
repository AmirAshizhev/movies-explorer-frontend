import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<h1>«Сохранённые фильмы»</h1>}/>
        <Route path='/profile' element={<h1>профилем пользователя</h1>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
