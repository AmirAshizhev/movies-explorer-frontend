import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({ spanClass, buttonClass, cards, isConected}) => {

  const [cardsToRender, setCardsToRender] = useState([]);
  const [noMoreMovies, setNoMoreMovies] = useState(false)

  // let { innerWidth: width} = window;
  // console.log(width)

  //фильтруем карты (12 шт)
  //добавляем еще 3 карты при нажатии на еще 
  useEffect(() => {


    setCardsToRender(cards.slice(0, 12))
    if (cards.length <= 12) {
      setNoMoreMovies(true)
    }
  }, [cards])


  // cardsToRender = cards.slice(0, 12)
  const cardsElements = cardsToRender.map((card) => (
    <MoviesCard
      {...card}
      card={card}
      key={card.id}
    />
  ))

  console.log(cardsToRender);

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

    // setCardsToRender(cardsToRender+3)
    setCardsToRender(cardsToRender.concat(cards.slice(cardsToRender.length, cardsToRender.length+3)))
    if (cardsToRender.length+3 >= cards.length) {
      setNoMoreMovies(true)
    }
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