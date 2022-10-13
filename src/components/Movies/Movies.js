import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css'
import moviesApi from '../../utils/MoviesApi';
import useWindowSize from '../../utils/hooks/useWindow';
import { changingMovieData, currentUserCards, filterMoviesByQuery, storage } from '../../utils/helpers';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Movies = ({loggedIn}) => {
  
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-active';
  const currentUser = React.useContext(CurrentUserContext);
   
  const [card, setCard] = useState(storage.getItem('searchedCards') ? storage.getItem('searchedCards') : []);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(storage.getItem('searchedInput') ? storage.getItem('searchedInput') : '');
  const [movies, setMovies] = useState(storage.getItem('searchedCards') ? storage.getItem('searchedCards') : []);
  const [isConected, setIsConected] = useState(null);

  const [addedMovies, setAddedMovies] = useState([]);




  const [isChecked, setIsCheked] = useState(storage.getItem('searchedCheckbox') ? storage.getItem('searchedCheckbox') : false);
  const { width } = useWindowSize();

  
  useEffect(()=>{
    storage.setItem('searchedCards', movies)
    storage.setItem('searchedInput', query);
    storage.setItem('searchedCheckbox', isChecked);
  }, [movies, query, isChecked])

  useEffect(()=>{
    setCard(movies)
    if (isChecked){
      setMovies(filterMoviesByQuery(movies, query, isChecked))
    } else if (!isChecked){
      setMovies(card)
      storage.setItem('searchedCards', card)
    }
  },[isChecked])


  useEffect(()=>{
    let token = storage.getItem('token');
    if (token){
      mainApi.setToken(token)
    }
    mainApi.getSavedMovie()
    .then((res)=>{
      setAddedMovies(currentUserCards(res.data, currentUser))
    })
    .catch(err => {
      console.log(err);
    })
  }, [movies])

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    moviesApi.getCards()
    .then((cards) => {
      setMovies(filterMoviesByQuery(changingMovieData(cards), query, isChecked))
      setCard(changingMovieData(cards))
      setIsConected(true)
      storage.setItem('searchedInput', query);
      storage.setItem('searchedCheckbox', isChecked);
      storage.setItem('searchedCards', cards)
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


  function handleAddMovie(card){
    mainApi.saveMovie(card)
    .then((res)=>{
      console.log(res)
      return mainApi.getSavedMovie()
    })   
    .then((res)=>{
      setAddedMovies(currentUserCards(res.data, currentUser))
    })
    .catch(err => {
      console.log(err);
    })
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
    .then((res)=>{
      console.log(res)
      return mainApi.getSavedMovie()
    })   
    .then((res)=>{
      setAddedMovies(currentUserCards(res.data, currentUser))
    })
    .catch(err => {
      console.log(err);
    })
  }
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
            handleDeleteMovie={handleDeleteMovie}
            isChecked={isChecked}
            addedMovies={addedMovies}

          />}
        </main>
      <Footer/>
    </>

  )
}

export default Movies;