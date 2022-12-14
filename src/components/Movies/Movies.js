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

const Movies = ({loggedIn, setInfoTooltipMessage, setIsInfoTooltipOpen}) => {
  
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-active';
  const currentUser = React.useContext(CurrentUserContext);
   

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(storage.getItem('searchedInput') ? storage.getItem('searchedInput') : '');
  const [movies, setMovies] = useState(storage.getItem('searchedCards') ? storage.getItem('searchedCards') : []);
  const [card, setCard] = useState(storage.getItem('searchedCards') ? storage.getItem('searchedCards') : []);
  const [isConected, setIsConected] = useState(null);

  const [addedMovies, setAddedMovies] = useState([]);

  const [moviedataBase, SetMoviedataBase] = useState([]);


  const [isChecked, setIsCheked] = useState(storage.getItem('searchedCheckbox') ? storage.getItem('searchedCheckbox') : false);
  const { width } = useWindowSize();

  useEffect(()=>{
    storage.setItem('searchedCards', card)
    storage.setItem('searchedInput', query);
    storage.setItem('searchedCheckbox', isChecked);
  }, [card, query, isChecked])

  useEffect(()=>{

    if (isChecked){
      setMovies(filterMoviesByQuery(card, query, isChecked))
      storage.setItem('searchedCards', movies)
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

    const alwaysChecked = true;
    if(!query){
      setInfoTooltipMessage('?????????? ???????????? ???????????????? ??????????')
      setIsInfoTooltipOpen(true)
    } else {
      setLoading(true);
      if(moviedataBase.length === 0){
        moviesApi.getCards()
        .then((cards) => {
          setMovies(filterMoviesByQuery(changingMovieData(cards), query, isChecked))
          setCard(filterMoviesByQuery(changingMovieData(cards), query, !alwaysChecked))
          setIsConected(true)
          storage.setItem('searchedInput', query);
          storage.setItem('searchedCheckbox', isChecked);
          storage.setItem('searchedCards', changingMovieData(cards));
          SetMoviedataBase(cards)
        })
        .catch(err => {
          console.log(err);
          setIsConected(false)
        })
        .finally(() => {
          setLoading(false);
        });
      } else {
        let currentMovies = moviedataBase;
        
        setMovies(filterMoviesByQuery(changingMovieData(currentMovies), query, isChecked))
        setCard(filterMoviesByQuery(changingMovieData(currentMovies), query, !alwaysChecked))
        setIsConected(true)
        storage.setItem('searchedInput', query);
        storage.setItem('searchedCheckbox', isChecked);
        storage.setItem('searchedCards', card);
        // storage.setItem('searchedCards', card);
        setIsConected(true)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }

    }
  }

  function handleChange(e) {
    setQuery(e.target.value)
  }


  function handleAddMovie(card){
    mainApi.saveMovie(card)
    .then((res)=>{
      return mainApi.getSavedMovie()
    })   
    .then((res)=>{
      setAddedMovies(currentUserCards(res.data, currentUser))
    })
    .catch(err => {
      setInfoTooltipMessage(err)
      setIsInfoTooltipOpen(true)
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
                placeholder='????????????' 
                // required 
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
              <p className='movies__text'>??????????????????????????????</p>
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