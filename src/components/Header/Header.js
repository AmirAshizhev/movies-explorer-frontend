import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
  return(
    <header className='header'>
      <div className="header__box">
        <Link to="/"  className="header__logo"></Link>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;