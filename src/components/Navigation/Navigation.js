import { Route, Routes, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    
    <Routes>
      <Route path='/' element={
        <div className="navigation">
          <Link className="navigation__link" to="/signup">Регистрация</Link>
          <Link className="navigation__link navigation__link_black" to="/signin">Вход</Link>
        </div>
      }/>

      {/* <Route path='/movies' element={
        <div className="navigation">
          <Link>Фильмы</Link>
          <Link to='/saved-movies'>Сохраненные фильмы</Link>
          <Link to='/profile'>Аккаунт</Link>
          <button lassName="navigation__button"></button>
        </div>
      }/> */}
    </Routes>
  )

}

export default Navigation;