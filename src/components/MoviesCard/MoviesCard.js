import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ 
    nameRU,
    image, 
    duration, 
    buttonClass, 
    trailerLink,
    activePage, 
    handleAddMovie, 
    handleDeleteMovie, 
    card, 
    addedMovie
  }) => {

  // const[isLiked, setIsliked] = useState(addedMovie.length !== 0 ? true : false || 0)
    //  const [cardLikeButton, setCardLikeButton] = useState('')

    let isLiked = addedMovie.length !== 0 ? true : false


    const spanClass = (
      !isLiked ? '' : 'movie-card__btn-span'
    );


    const cardLikeButtonClassName = (
      `movie-card__btn ${isLiked ? 'movie-card__btn-active' : ''}`
      // `movie-card__btn ${isLiked && 'movie-card__btn-active'}`
    );


  

  function handleLikeClick() {

    if (!isLiked){
      handleAddMovie(card)
      // setCardLikeButton('movie-card__btn-active')
    } else if (isLiked) {
      handleDeleteMovie(addedMovie[0], activePage)
      // setCardLikeButton('')
    }
    // console.log(isLiked)
    // setIsliked(!isLiked)
    console.log(isLiked)
    isLiked = !isLiked
  }

  function handleDeleteClick() {
    handleDeleteMovie(card, activePage)

  }
  
  console.log(addedMovie[0])
  console.log(isLiked)
  // let img = imageBaseUrl + image.url;
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>{nameRU}</h3>
      <p className='movie-card__time'>{`${duration} минут`}</p>
      <a href={trailerLink} target="_blank" rel="noreferrer" className='movie-card__img-box'>
        <img src={image} alt={nameRU} className='movie-card__img'/>
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