import { useCallback, useState, useEffect } from 'react';
import { useApi } from '../../utils/hooks/useApi';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css'
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const loggedIn = false;
  // const loading = false;
  const spanClass = 'movie-card__btn-span';
  const buttonClass = 'movie-card__btn-active';

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState(query);
  const [movies, setMovies] = useState([])

    const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    moviesApi.getCards()
    .then((cards) => {
      setCards(cards)
      console.log(cards)
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
  });
  }, [currentQuery])

//фильтрация на сабмите, а должа быть при запросе 

  // const fetchMovies = useCallback(() =>{
  //   return moviesApi.getCards()
  //   // .then((cards) => {
  //   //   setCards(cards)
  //   //   console.log(cards)
  //   // })
  // }, [currentQuery])

  // const { data: cards = [], loading } = useApi(fetchMovies);

  function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);
    // console.log(cards)
    // console.log(filterMoviesByQuery(cards, query));    

    setMovies(filterMoviesByQuery(cards, query))
    setCurrentQuery(query);
    // console.log(cards)

  }

  function handleChange(e) {
    setQuery(e.target.value)
  }

  // function searchMovies() {
  //   //делать запрос к api 
  //   //фильтровать карты по имени 
  //   //выдавать эти карты 
  // }

  function filterMoviesByQuery(movies, query){ //функция для одного фильма

    const filterMovie = (movie) => {
      return movie.nameRU.toLowerCase().includes(query.toLowerCase())
    }

    return movies.filter(filterMovie)
  }

  // const { data: cards = [], loading } = useApi
  
  // if (loading) {
  //   return <Preloader/>
  // }

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
                <input className='movies__checkbox' type='checkbox'></input>
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