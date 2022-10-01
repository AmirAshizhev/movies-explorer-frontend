import './PageNotFound.css'

const PageNotFound = () => {
  return(
    <div className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__subtitle'>Станица не найдена</p>
      <a href="/" target="_blank" className="page-not-found__back">Назад</a>
    </div>
  )
}

export default PageNotFound;