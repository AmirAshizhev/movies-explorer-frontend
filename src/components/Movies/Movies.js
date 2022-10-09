import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css'
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const loggedIn = false;
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-active';

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState(query);
  const [movies, setMovies] = useState([]);
  const [cards, setCards] = useState([]);


  const [isChecked, setIsCheked] = useState(false);

  useEffect(() => {
    setLoading(true);
    moviesApi.getCards()
    .then((cards) => {
      setCards(cards)
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
  });
  }, [currentQuery])


  function handleSubmit(e) {
    e.preventDefault();
    setMovies(filterMoviesByQuery(cards, query, isChecked))
    setCurrentQuery(query);
  }

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function filterMoviesByQuery(movies, query, isChecked) {

    const filterMovie = (movie) => {
      return movie.nameRU.toLowerCase().includes(query.toLowerCase())
    }

    const filterShortMovies = (movie) => {
      return movie.duration <= 40;
    }

    if (isChecked) {
      return movies.filter(filterShortMovies).filter(filterMovie)
    } else {
      return movies.filter(filterMovie)
    }
    
  }

  // console.log(isChecked);


  return(
    <>
      <Header loggedIn={loggedIn}/>
        <main>
          <div className='movies__search'>
            <form className='movies__form' onSubmit={handleSubmit}>
              <input 
                className='movies__search-input' 
                placeholder='Фильмы' 
                required 
                onChange={handleChange}
              >
              </input>
              <button type='submit' className='movies__search-btn'></button>
              <span className='movies__search-span'></span>
            </form>
            <div className='movies__box'>
              <label className='movies__checkbox-label'>
                <input 
                  className='movies__checkbox' 
                  type='checkbox'
                  checked={isChecked}
                  onChange={() => setIsCheked(!isChecked)}
                >
                </input>
                <span className='movies__checkbox-span movies__checkbox-span-visible'></span>
              </label>
              <p className='movies__text'>Короткометражки</p>
            </div>
          </div>
          <span className='movies__span'></span>

          {loading ? <Preloader/> : 
          <MoviesCardList spanClass={spanClass} buttonClass={buttonClass} cards={movies}/>
          }
        </main>
      <Footer/>
    </>

  )
}

export default Movies;