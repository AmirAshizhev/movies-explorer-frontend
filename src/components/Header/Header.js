import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
  return(
    <header className='header'>
      <div className="header__box">
        <a href="/" target="_blank" className="header__logo"></a>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;