import './MoviesCard.css';
import link from '../../images/card__example.png';

const MoviesCard = ({ name }) => {
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>В погоне за Бенкси</h3>
      <p className='movie-card__time'>27 минут</p>
      <img src={link} alt={name} className='movie-card__img'/>
      <button type='button' className='movie-card__btn'>Сохранить</button>
    </li>
  )
}

export default MoviesCard;