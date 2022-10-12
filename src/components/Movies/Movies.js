import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css'
import moviesApi from '../../utils/MoviesApi';
import useWindowSize from '../../utils/hooks/useWindow';
import { changingMovieData, storage } from '../../utils/helpers';
import mainApi from '../../utils/MainApi';
// import { useLocation } from 'react-router-dom';

const Movies = ({loggedIn}) => {
  
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-active';

  

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(storage.getItem('searchedInput') ? storage.getItem('searchedInput') : '');
  const [movies, setMovies] = useState(storage.getItem('searchedCards') ? storage.getItem('searchedCards') : []);
  const [isConected, setIsConected] = useState(null);


  const [isChecked, setIsCheked] = useState(storage.getItem('searchedCheckbox') ? storage.getItem('searchedCheckbox') : false);
  const { width } = useWindowSize();

  
  useEffect(()=>{
    storage.setItem('searchedCards', movies)
  }, [movies])

  useEffect(()=>{
    setMovies(filterMoviesByQuery(movies, query, isChecked))
  },[isChecked])

  console.log(isChecked)

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    moviesApi.getCards()
    .then((cards) => {
      setMovies(filterMoviesByQuery(changingMovieData(cards), query, isChecked))
      setIsConected(true)
      storage.setItem('searchedInput', query);
      storage.setItem('searchedCheckbox', isChecked);
    })
    .catch(err => {
      console.log(err);
      setIsConected(false)
    })
    .finally(() => {
      setLoading(false);
    });
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

  function handleAddMovie(card){
    mainApi.saveMovie(card)
    .then((res)=>{
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return(
    <>
      <Header loggedIn={loggedIn} activePage='movies'/>
        <main>
          <div className='movies__search'>
            <form className='movies__form' onSubmit={handleSubmit}>
              <input 
                className='movies__search-input' 
                placeholder='Фильмы' 
                required 
                onChange={handleChange}
                value={query}
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
                  // onChange={handleCheckBox}
                >
                </input>
                <span className='movies__checkbox-span movies__checkbox-span-visible'></span>
              </label>
              <p className='movies__text'>Короткометражки</p>
            </div>
          </div>
          <span className='movies__span'></span>

          {loading ? 
          <Preloader/> : 
          <MoviesCardList 
            spanClass={spanClass} 
            buttonClass={buttonClass} 
            cards={movies} 
            isConected={isConected} 
            width={width}
            activePage='movies'
            handleAddMovie={handleAddMovie}

          />}
        </main>
      <Footer/>
    </>

  )
}

export default Movies;