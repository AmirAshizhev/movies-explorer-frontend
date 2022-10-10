import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({ spanClass, buttonClass, cards, isConected}) => {

  const [cardsToRender, setCardsToRender] = useState(12);


  // cardsToRender = cards.slice(0, 12)
  const cardsElements = cards.map((card) => (
    <MoviesCard
      {...card}
      card={card}
      key={card.id}
    />
  ))

  // console.log(cardsElements.slice(0, 12));

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

    setCardsToRender(cardsToRender+3)
    console.log(cardsToRender);
  }

  return(
    <section>

      {
        (cards.length !== 0) ? 
        <>
          <ul className='movies-card-list'>
            {cardsElements}
          </ul>
          <div className='movies-card-list__btn-box'>
            <button className='movies-card-list__btn' onClick={handleBtnClick}>Еще</button>
          </div>
        </>
         : <p className='movies-card-list__msg'>{conecting(isConected)}</p>
      }
      

    </section>
  )
}

export default MoviesCardList;