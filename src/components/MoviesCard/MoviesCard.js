import './MoviesCard.css';

const MoviesCard = ({ nameRU, image, spanClass, duration, buttonClass, trailerLink }) => {

  const imageBaseUrl = "https://api.nomoreparties.co/"

  let img = imageBaseUrl + image.url;
  return(
    <li className='movie-card'>
      <h3 className='movie-card__title'>{nameRU}</h3>
      <p className='movie-card__time'>{`${duration} минут`}</p>
      <a href={trailerLink} target="_blank" rel="noreferrer" className='movie-card__img-box'>
        <img src={img} alt={nameRU} className='movie-card__img'/>
      </a>

      <button type='button' className={`movie-card__btn ${buttonClass}`}>
        <span className={spanClass}>
          Сохранить
        </span>
      </button>
    </li>
  )
}

export default MoviesCard;