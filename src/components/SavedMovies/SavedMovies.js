import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import './SavedMovies.css'
import '../Movies/Movies.css'

const SavedMovies = () => {
  const loggedIn = false;
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-delete';

  return(
    <section>
      <Header loggedIn={loggedIn}/>
      <div className='movies__search'>
        <form className='movies__form'>
          <input className='movies__search-input' placeholder='Фильмы'></input>
          <button type='button' className='movies__search-btn'></button>
          <span className='movies__search-span'></span>
        </form>
        <div className='movies__box'>
          <label className='movies__checkbox-label'>
            <input className='movies__checkbox' type='checkbox'></input>
            <span className='movies__checkbox-span'></span>
          </label>
          <p className='movies__text'>Короткометражки</p>
        </div>
      </div>
      <span className='movies__span'></span>
      <MoviesCardList spanClass={spanClass} buttonClass={buttonClass}/>
      <Footer/>
    </section>
  )
}

export default SavedMovies;