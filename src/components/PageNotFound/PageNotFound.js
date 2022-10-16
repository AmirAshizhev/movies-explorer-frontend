import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'


const PageNotFound = () => {

  const navigate = useNavigate()
  return(
    <div className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__subtitle'>Станица не найдена</p>
      <button className="page-not-found__back" onClick={()=>navigate(-1)}>Назад</button>
    </div>
  )
}

export default PageNotFound;