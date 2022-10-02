import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = ({ loggedIn, headerClassName }) => {
  return(
    <header className={`header ${headerClassName}`}>
      <div className="header__box">
        <Link to="/"  className="header__logo"></Link>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}

export default Header;