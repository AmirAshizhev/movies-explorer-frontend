import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css'
import React, { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import useWindowSize from '../../utils/hooks/useWindow';
import { changingMovieData, currentUserCards, filterMoviesByQuery, storage } from '../../utils/helpers';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedMovies = ({loggedIn, setInfoTooltipMessage, setIsInfoTooltipOpen}) => {
  const [isConected, setIsConected] = useState(null);
  const [isChecked, setIsCheked] = useState(false);
  const { width } = useWindowSize();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(()=>{
    let token = storage.getItem('token');
    if (token){
      mainApi.setToken(token)
    }
    mainApi.getSavedMovie()
    .then((res)=>{
      setMovies(filterMoviesByQuery(currentUserCards(res.data, currentUser), query, isChecked))
      setIsConected(true)
    })
    .catch(err => {
      console.log(err);
      setIsConected(false)
    })
  }, [isChecked])


  function handleChange(e) {
    setQuery(e.target.value)
  }


  function handleDeleteMovie(movie, activePage) {
    if (activePage === 'saved-movies' ){
    mainApi.deleteMovie(movie._id)
    .then(() => {setMovies((state) => state.filter((c) => c._id !== movie._id ));})
    .catch(err => {
      console.log(err);
    }) 
  } else if(activePage === 'movies') {
    mainApi.deleteMovie(movie._id)
  }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!query){
      setInfoTooltipMessage('Нужно ввести ключевое слово')
      setIsInfoTooltipOpen(true)
    } else {
      mainApi.getSavedMovie()
      .then((res)=>{
        setMovies(filterMoviesByQuery(currentUserCards(res.data, currentUser), query, isChecked))
        setIsConected(true)
      })
      .catch(err => {
        console.log(err);
        setIsConected(false)
      })
    }
    
  }

  return(
    <>
      <Header loggedIn={loggedIn} activePage='saved-movies'/>
        <main>
          <div className='movies__search'>
            <form className='movies__form' onSubmit={handleSubmit}>
              <input 
                className='movies__search-input'
                placeholder='Фильмы' 
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
            addedMovies={movies}
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