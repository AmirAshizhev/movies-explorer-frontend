import Header from '../Header/Header';
import './Profile.css'

const Profile = () => {
    return(
      <section>
        <Header/>
        <div className='profile__box'>
          <h2 className='profile__title'>Привет, Амир!</h2>
          <div className='profile__items'>
            <span className='profile__name'>Имя</span>
            <span className='profile__value'>Амир</span>
          </div>
          <div className='profile__items'>
            <span className='profile__name'>Email</span>
            <span className='profile__value'>email@email.ru</span>
          </div>
          <button className='profile__btn'>Редактировать</button>
          <button className='profile__btn-signout'>Выйти из аккаунта</button>
        </div>
      </section>
    )

}

export default Profile;