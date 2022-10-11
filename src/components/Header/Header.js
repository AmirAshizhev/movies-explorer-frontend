import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = ({ loggedIn, headerClassName, activePage }) => {
  return(
    <header className={`header ${headerClassName}`}>
      <div className="header__box">
        <Link to="/"  className="header__logo"></Link>
        <Navigation loggedIn={loggedIn} activePage={activePage}/>
      </div>
    </header>
  )
}

export default Header;