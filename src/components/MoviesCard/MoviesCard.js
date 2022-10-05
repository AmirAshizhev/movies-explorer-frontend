import './MoviesCard.css';
import link from '../../images/card__example.png';

const MoviesCard = ({ nameRU, image, spanClass, duration, buttonClass }) => {
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>{nameRU}</h3>
      <p className='movie-card__time'>{`${duration} минут`}</p>
      <img src={image.url} alt={nameRU} className='movie-card__img'/>
      <button type='button' className={`movie-card__btn ${buttonClass}`}>
        <span className={spanClass}>
          Сохранить
        </span>
      </button>
    </li>
  )
}

export default MoviesCard;