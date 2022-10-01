import './Footer.css'

const Footer = () => {
  return(
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__box'>
      <nav className='footer__items'>
        <li className='footer__item'>Яндекс.Практикум</li>
        <li className='footer__item'>Github</li>
      </nav>
      <p className='footer__year'>©2020</p>
      </div>
    </footer>
  )

}

export default Footer;