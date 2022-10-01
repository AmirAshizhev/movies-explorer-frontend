import './Header.css'

const Header = () => {
  return(
    <header className='header'>
      <div className="header__box">
        <a href="#" target="_blank" className="header__logo"></a>
        <div className="header__links">
          <a className="header__link" href="#">Регистрация</a>
          <a className="header__link header__link__black" href="#">Вход</a>
        </div>
      </div>
    </header>
  )
}

export default Header;