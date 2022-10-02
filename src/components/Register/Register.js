import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="register">
      <div className="register__box">
        <Link className='register__logo' to='/'></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <fieldset className="register__fieldset">
          <label className="register__field">
            <span className="register__input-label">Имя</span>
            <input 
              type="text"  
              name="name" 
              // placeholder="Имя" 
              className="register__input" 
              required 
            />
            <span className="register__input-error"></span>
          </label>          
          <label className="register__field">
            <span className="register__input-label">Email</span>
            <input 
              type="email"  
              name="email" 
              // placeholder="Email" 
              className="register__input" 
              required 
            />
            <span className="register__input-error"></span>
          </label>
          <label className="register__field">
          <span className="register__input-label">Пароль</span>
            <input 
              type="password"  
              name="password" 
              // placeholder="Пароль" 
              className="register__input" 
              required 
            />
            <span className="register__input-error">аа</span>
          </label>
        </fieldset>
        <button className="register__button" type="submit" aria-label="Войти">Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы? 
          <Link className="register__link" to="/signin" target="_self">
            Войти
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Register;