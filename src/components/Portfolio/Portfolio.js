import './Portfolio.css'
import Photo from '../../images/pic__COLOR_pic.png'

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
        <a href="#" target="_blank " className="portfolio__github">Github</a>
      </div>
      <h4 className='portfolio__links-title'>Портфолио</h4>
      <nav>
        <li className='portfolio__links'>
          <a className='portfolio__link' href="#" target="_blank ">Статичный сайт</a>
          <div className='portfolio__link-arrow'></div>
        </li>
        <li className='portfolio__links'>
          <a className='portfolio__link' href="#" target="_blank ">Адаптивный сайт</a>
          <div className='portfolio__link-arrow'></div></li>
        <li className='portfolio__links'>
          <a className='portfolio__link' href="#" target="_blank ">Одностраничное приложение</a>
          <div className='portfolio__link-arrow'></div>
        </li>
      </nav>
    </ div>
  )
}

export default Portfolio;