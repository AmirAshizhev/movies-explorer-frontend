import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({ spanClass, buttonClass}) => {
  return(
    <section>
      <ul className='movies-card-list'>
        <MoviesCard spanClass={spanClass} buttonClass={buttonClass}/>
        <MoviesCard spanClass={spanClass} buttonClass={buttonClass}/>
        <MoviesCard spanClass={spanClass} buttonClass={buttonClass}/>
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