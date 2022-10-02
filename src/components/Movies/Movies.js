import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css'

const Movies = () => {
  const loggedIn = false;

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
          <input className='movies__checkbox' type='checkbox'></input>
          <p className='movies__text'>Короткометражки</p>
        </div>
      </div>
      <span className='movies__span'></span>
      <MoviesCardList/>
      <Footer/>
    </section>
  )
}

export default Movies;