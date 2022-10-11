import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css'

const SavedMovies = ({loggedIn}) => {
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-delete';

  return(
    <>
      <Header loggedIn={loggedIn} activePage='saved-movies'/>
        <main>
          <div className='movies__search'>
            <form className='movies__form'>
              <input className='movies__search-input' placeholder='Фильмы' required></input>
              <button type='submit' className='movies__search-btn'></button>
              <span className='movies__search-span'></span>
            </form>
            <div className='movies__box'>
              <label className='movies__checkbox-label'>
                <input className='movies__checkbox' type='checkbox'></input>
                <span className='movies__checkbox-span movies__checkbox-span-visible'></span>
              </label>
              <p className='movies__text'>Короткометражки</p>
            </div>
          </div>
          <span className='movies__span'></span>
          <MoviesCardList spanClass={spanClass} buttonClass={buttonClass}/>
        </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;