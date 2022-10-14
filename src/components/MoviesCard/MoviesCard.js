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
    addedMovie}) => {

    let isLiked = addedMovie.length !== 0 ? true : false

    const spanClass = (
      !isLiked ? '' : 'movie-card__btn-span'
    );

    const cardLikeButtonClassName = (
      `movie-card__btn ${isLiked ? 'movie-card__btn-active' : ''}`
    );


  function handleLikeClick() {

    if (!isLiked){
      handleAddMovie(card)
    } else if (isLiked) {
      handleDeleteMovie(addedMovie[0], activePage)
    }

    isLiked = !isLiked
  }

  function handleDeleteClick() {
    handleDeleteMovie(card, activePage)

  }
  
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