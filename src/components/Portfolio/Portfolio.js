import './Portfolio.css'
import Photo from '../../images/pic__COLOR_pic.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h2 className="portfolio__title">Студент</h2>
      <div className='portfolio__info'>
        <img src={Photo} alt="" className='portfolio__img'/>
        <h3 className="portfolio__name">Амир</h3>
        <p className="portfolio__subtitle">Фронтенд-разработчик, 25 лет</p>
        <p className="portfolio__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link href="#" target="_blank " className="portfolio__github">Github</Link>
      </div>
      <h4 className='portfolio__links-title'>Портфолио</h4>
      <nav>
        <li className='portfolio__links'>
          <Link className='portfolio__link' href="#" target="_blank ">Статичный сайт</Link>
          <div className='portfolio__link-arrow'></div>
        </li>
        <li className='portfolio__links'>
          <Link className='portfolio__link' href="#" target="_blank ">Адаптивный сайт</Link>
          <div className='portfolio__link-arrow'></div></li>
        <li className='portfolio__links'>
          <Link className='portfolio__link' href="#" target="_blank ">Одностраничное приложение</Link>
          <div className='portfolio__link-arrow'></div>
        </li>
      </nav>
    </ div>
  )
}

export default Portfolio;