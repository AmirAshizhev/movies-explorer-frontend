import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = () => {
  return(
    <section>
      <ul className='movies-card-list'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <div className='movies-card-list__btn-box'>
        <button className='movies-card-list__btn'>Еще</button>
      </div>

    </section>
  )
}

export default MoviesCardList;