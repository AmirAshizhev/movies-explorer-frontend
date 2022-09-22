import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>О проекте</h1>}/>
        <Route path='/movies' element={<h1>«Фильмы»</h1>}/>
        <Route path='/saved-movies' element={<h1>«Сохранённые фильмы»</h1>}/>
        <Route path='/profile' element={<h1>профилем пользователя</h1>}/>
        <Route path='/signin' element={<h1>авторизации</h1>}/>
        <Route path='/signup' element={<h1>регистрации</h1>}/>
        <Route path='/*' element={<h1>не найдна</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
