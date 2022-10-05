import Header from '../Header/Header';
import './Profile.css'

const Profile = () => {
    return(
      <>
        <Header/>
        <main>
          <form className='profile__box'>
            <h2 className='profile__title'>Привет, Амир!</h2>
            <div className='profile__items'>
              <span className='profile__name'>Имя</span>
              <input className='profile__value' value={'Амир'} disabled></input>
            </div>
            <div className='profile__items'>
              <span className='profile__name'>Email</span>
              <input className='profile__value' value={'email@mail.ru'} disabled></input>
            </div>
            <button type='submit' className='profile__btn'>Редактировать</button>
            <button type='button' className='profile__btn-signout'>Выйти из аккаунта</button>
          </form>          
        </main>

      </>
    )

}

export default Profile;