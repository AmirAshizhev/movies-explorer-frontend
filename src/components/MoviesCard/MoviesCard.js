import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ nameRU, image, duration, buttonClass, trailerLink }) => {

  const[isLiked, setIsliked] = useState(false)
  const imageBaseUrl = "https://api.nomoreparties.co/"

  const spanClass = (
    !isLiked ? '' : 'movie-card__btn-span'
  );

  const cardLikeButtonClassName = (
    `movie-card__btn ${isLiked ? 'movie-card__btn-active' : ''}`
  );


  function handleLikeClick() {
    setIsliked(!isLiked)
  }
  

  let img = imageBaseUrl + image.url;
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>{nameRU}</h3>
      <p className='movie-card__time'>{`${duration} минут`}</p>
      <a href={trailerLink} target="_blank" rel="noreferrer" className='movie-card__img-box'>
        <img src={img} alt={nameRU} className='movie-card__img'/>
      </a>

      <button type='button' className={cardLikeButtonClassName} onClick={handleLikeClick}>
        <span className={spanClass}>
          Сохранить
        </span>
      </button>
    </li>
  )
}

export default MoviesCard;