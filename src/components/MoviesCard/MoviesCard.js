import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ nameRU, image, duration, buttonClass, trailerLink, activePage, handleAddMovie, handleDeleteMovie, card}) => {

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

    handleAddMovie(card)
  }

  function handleDeleteClick() {
    handleDeleteMovie()

  }
  

  let img = imageBaseUrl + image.url;
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>{nameRU}</h3>
      <p className='movie-card__time'>{`${duration} минут`}</p>
      <a href={trailerLink} target="_blank" rel="noreferrer" className='movie-card__img-box'>
        <img src={img} alt={nameRU} className='movie-card__img'/>
      </a>

      <button 
        type='button' 
        className= {`movie-card__btn ${activePage === 'movies' ? cardLikeButtonClassName : buttonClass}`} 
        onClick={activePage === 'saved-movies' ? handleDeleteClick : handleLikeClick}>
        <span className={activePage === 'saved-movies' ? 'movie-card__btn-span' : spanClass}>
          Сохранить
        </span>
      </button>
    </li>
  )
}

export default MoviesCard;