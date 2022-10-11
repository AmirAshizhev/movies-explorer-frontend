import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ loggedIn, activePage }) => {


  function handleBurger(){

  }

  return (
    <section>
      {!loggedIn ? 
        <>
          <div className="navigation">
            <Link className="navigation__link" to="/signup">Регистрация</Link>
            <Link className="navigation__link navigation__link_black" to="/signin">Вход</Link>
          </div>
        </> : 
        <>
        <div className="navigation">
          <div className="navigation_logged-in">
            <Link 
              className={`navigation__link-item ${activePage === 'movies' ? 'navigation__link-item_bold' : ''}`}
              to='/movies'
            >
              Фильмы
            </Link>
            <Link 
              className={`navigation__link-item ${activePage === 'saved-movies' ? 'navigation__link-item_bold' : ''}`}
              to='/saved-movies'
            >
              Сохраненные фильмы
            </Link>          
            <Link 
              className={`navigation__link-item navigation__link-item_btn ${activePage === 'account' ? 'navigation__link-item_bold' : ''}`} 
              to='/profile'
            >
              Аккаунт
            </Link>
          </div>

          <button className="navigation__btn" type='button' onClick={handleBurger}></button>
        </div>
        </>

      }
    </section>
  )

}

export default Navigation;