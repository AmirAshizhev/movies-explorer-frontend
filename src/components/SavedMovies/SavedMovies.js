import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css'
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import useWindowSize from '../../utils/hooks/useWindow';
import { storage } from '../../utils/helpers';

const SavedMovies = ({loggedIn}) => {
  const [isConected, setIsConected] = useState(null);
  const [isChecked, setIsCheked] = useState(false);
  const { width } = useWindowSize();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    let token = storage.getItem('token');
    if (token){
      mainApi.setToken(token)
    }
    mainApi.getSavedMovie()
    .then((res)=>{
      // console.log(res.data)
      // setMovies(res.data)
      setMovies(filterMoviesByQuery(res.data, query, isChecked))
      setIsConected(true)
    })
    .catch(err => {
      console.log(err);
      setIsConected(false)
    })
  }, [])

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

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
    .then((res)=>{
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }



  return(
    <>
      <Header loggedIn={loggedIn} activePage='saved-movies'/>
        <main>
          <div className='movies__search'>
            <form className='movies__form'>
              <input 
                className='movies__search-input'
                placeholder='Фильмы' 
                required
                onChange={handleChange}
                value={query}
              ></input>
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
          <MoviesCardList 
            spanClass={'movie-card__btn-span'} 
            buttonClass={'movie-card__btn-delete'}
            cards={movies} 
            isConected={isConected} 
            width={width}
            activePage='saved-movies'
            handleDeleteMovie={handleDeleteMovie}
          />
        </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;