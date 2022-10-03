import './Portfolio.css'
import Photo from '../../images/pic__COLOR_pic.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Студент</h2>
      <div className='portfolio__info'>
        <img src={Photo} alt="Мое фото" className='portfolio__img'/>
        <h3 className="portfolio__name">Амир</h3>
        <p className="portfolio__subtitle">Фронтенд-разработчик, 25 лет</p>
        <p className="portfolio__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a href='https://github.com/AmirAshizhev' target="_blank " className="portfolio__github">Github</a>
      </div>
      <h4 className='portfolio__links-title'>Портфолио</h4>
      
      <ul className='portfolio__links-list'>
        <li className='portfolio__links-box'>
          <a className='portfolio__links' href='https://github.com/AmirAshizhev/how-to-learn' target="_blank">
            <p className='portfolio__link' >Статичный сайт</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
        <li className='portfolio__links-box'>
          <a className='portfolio__links' href="https://amirashizhev.github.io/russian-travel/" target="_blank">
            <p className='portfolio__link'>Адаптивный сайт</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
        
        <li className='portfolio__links-box'>
          <a className='portfolio__links' href="https://amirashizhev.github.io/" target="_blank">
            <p className='portfolio__link'>Одностраничное приложение</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;