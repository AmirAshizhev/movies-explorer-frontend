import React, { useEffect, useState } from "react";
import Header from '../Header/Header';
import './Profile.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/hooks/useFormValodation';

const Profile = ({handleLogout, handleUpdateUser}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const formValues = useFormWithValidation();
  
  // console.log(currentUser)
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [isEditProfile, setIsEditProfile] = useState(true)

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); 

  useEffect(() =>{
    formValues.resetForm({name: name, email: email})
  },[])

  

  function handleEditSubmit(e) {
    e.preventDefault();
    // handleLogin(formValues.values)
    setIsEditProfile(false)
  }

  function handleSaveSubmit(e) {
    e.preventDefault();
    // handleLogin(formValues.values)
    setIsEditProfile(true)
    // setName(formValues.values.name)
    // setEmail(formValues.values.email);

    handleUpdateUser({name: formValues.values.name, email: formValues.values.email})

    // console.log(currentUser)
  }


  function handleProfileLogout() {
    setIsEditProfile(true)
    handleLogout()
  }




  return(
    <>
      <Header/>
      <main>

        {isEditProfile ?
          
        <form className='profile__box'>
          <h2 className='profile__title'>{`Привет, ${name || ""}!`}</h2>
          <div className='profile__items'>
            <span className='profile__name'>Имя</span>
            <input className='profile__value' value={name || ""} disabled></input>
          </div>
          <div className='profile__items'>
            <span className='profile__name'>Email</span>
            <input className='profile__value' value={email || ""} disabled></input>
          </div>
          <button type='submit' className='profile__btn' onClick={handleEditSubmit}>Редактировать</button>
          <button type='button' className='profile__btn-signout' onClick={handleProfileLogout}>Выйти из аккаунта</button>
        </form> 
        :
        <form className='profile__box'>
          <h2 className='profile__title'>{`Приветnnnn, ${name || ""}!`}</h2>
          <label className='profile__items-edit'>
            <input 
              type="text"  
              name="name" 
              className='profile__value-edit' 
              plaseholder="Имя" 
              onChange={formValues.handleChange}
              value = {formValues.values.name || ""}
              required
              minLength = {2}
              maxLength = {30}
            >
            </input>
            <span className='profile__error-edit'>{formValues.errors.name}</span>
          </label>
          <label className='profile__items-edit'>
            <input 
              type="email"  
              name="email" 
              className='profile__value-edit' 
              plaseholder="Email" 
              onChange={formValues.handleChange}
              value = {formValues.values.email || ""}
              required
            >
            </input>
            <span className='profile__error-edit'>{formValues.errors.email}</span>
          </label>
          <button type='submit' className='profile__btn' onClick={handleSaveSubmit}>Сохранить</button>
        </form>}           
      </main>

    </>
  )

}

export default Profile;