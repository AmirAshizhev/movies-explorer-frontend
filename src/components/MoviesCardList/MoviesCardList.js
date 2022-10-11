import { useEffect, useState } from 'react';
// import { storage } from '../../utils/helpers';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({ spanClass, buttonClass, cards, isConected, width}) => {

  const [cardsToRender, setCardsToRender] = useState([]);
  const [noMoreMovies, setNoMoreMovies] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth)

  // let { innerWidth: width} = window;
  // console.log(width)

  // useEffect(()=>{
  //   storage.setItem('searchedCards', cardsToRender)
  //   // storage.setItem('location', location);
  //   // storage.setItem('searchedInput', query);

  // }, [cardsToRender])

  useEffect(() => {
    if(width >= 1280) {
      setCardsToRender(cards.slice(0, 12))
      if (cards.length <= 12) {
        setNoMoreMovies(true)
      }
    }
    else if(width >= 768 & width < 1280) {
      setCardsToRender(cards.slice(0, 8))
      if (cards.length <= 8) {
        setNoMoreMovies(true)
      }
    }
    else if (width < 768) {
      setCardsToRender(cards.slice(0, 5))
      if (cards.length <= 5) {
        setNoMoreMovies(true)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])



  const cardsElements = cardsToRender.map((card) => (
    <MoviesCard
      {...card}
      card={card}
      key={card.id}
    />
  ))

  // console.log(cardsToRender);

  function conecting(isConected) {
    if (isConected === null) {
      return ''
    } else if (isConected === true) {
      return 'Ничего не найдено'
    } else if (isConected === false) {
      return 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
    }
  }

  function handleBtnClick () {
    // console.log(storage.getItem('searchedInput'))
    // console.log(storage.getItem('searchedCards'))
    // console.log(storage.getItem('searchedCheckbox'))
    

    if(width >= 1280) {
      setCardsToRender(cardsToRender.concat(cards.slice(cardsToRender.length, cardsToRender.length+3)))
      if (cardsToRender.length+3 >= cards.length) {
        setNoMoreMovies(true)
      }
    }
    else if(width < 1280) {
      setCardsToRender(cardsToRender.concat(cards.slice(cardsToRender.length, cardsToRender.length+2)))
      if (cardsToRender.length+2 >= cards.length) {
        setNoMoreMovies(true)
      }
    }


    // setCardsToRender(cardsToRender.concat(cards.slice(cardsToRender.length, cardsToRender.length+3)))
    // if (cardsToRender.length+3 >= cards.length) {
    //   setNoMoreMovies(true)
    // }
  }

  return(
    <section>

      {
        (cards.length !== 0) ? 
        <>
          <ul className='movies-card-list'>
            {cardsElements}
          </ul>
          {!noMoreMovies && <div className='movies-card-list__btn-box'>
            <button className='movies-card-list__btn' onClick={handleBtnClick}>Еще</button>
          </div>}
        </>
         : <p className='movies-card-list__msg'>{conecting(isConected)}</p>
      }
      

    </section>
  )
}

export default MoviesCardList;