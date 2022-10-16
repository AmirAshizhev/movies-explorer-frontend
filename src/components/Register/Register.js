import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormWithValidation } from '../../utils/hooks/useFormValodation';

const Register = ({ handleRegister, loggedIn}) => {

  const formValues = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(formValues.values)
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);


  return (
    <main>
      <section className="register">
        <div className="register__box">
          <Link className='register__logo' to='/'></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </div>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">
            <label className="register__field">
              <span className="register__input-label">Имя</span>
              <input 
                type="text"  
                name="name" 
                className="register__input" 
                required
                onChange={formValues.handleChange}
                value = {formValues.values.name || ""}
                minLength = {2}
                maxLength = {30}
              />
              <span className="register__input-error">{formValues.errors.name}</span>
            </label>          
            <label className="register__field">
              <span className="register__input-label">Email</span>
              <input 
                type="email"  
                name="email" 
                className="register__input" 
                required 
                onChange={formValues.handleChange}
                value = {formValues.values.email || ""}
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                placeholder='email@emal.ru'
              />
              <span className="register__input-error">{formValues.errors.email}</span>
            </label>
            <label className="register__field">
            <span className="register__input-label">Пароль</span>
              <input 
                type="password"  
                name="password" 
                className="register__input" 
                required 
                onChange={formValues.handleChange}
                value = {formValues.values.password || ""}
                minLength = {3}
              />
              <span className="register__input-error">{formValues.errors.password}</span>
            </label>
          </fieldset>
          <button className="register__button" type="submit" aria-label="Войти" disabled={!formValues.isValid}>Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы? 
            <Link className="register__link" to="/signin" target="_self">
              Войти
            </Link>
          </p>
        </form>
      </section>
    </main>

  )
}

export default Register;