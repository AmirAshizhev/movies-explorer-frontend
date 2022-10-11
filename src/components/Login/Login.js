import './Login.css'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/hooks/useFormValodation';

const Login = ({handleLogin}) => {

  const formValues = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(formValues.values)
  }


  return (
    <main>
      <section className="register">
        <div className="register__box">
          <Link className='register__logo' to='/'></Link>
          <h2 className="register__title">Рады видеть!</h2>
        </div>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">      
            <label className="register__field">
              <span className="register__input-label">Email</span>
              <input 
                type="email"  
                name="email" 
                onChange={formValues.handleChange}
                value = {formValues.values.email || ""}
                className="register__input" 
                required 
              />
              <span className="register__input-error">{formValues.errors.email}</span>
            </label>
            <label className="register__field">
            <span className="register__input-label">Пароль</span>
              <input 
                type="password"  
                name="password" 
                onChange={formValues.handleChange}
                value = {formValues.values.password || ""}
                className="register__input" 
                required 
              />
              <span className="register__input-error">{formValues.errors.password}</span>
            </label>
          </fieldset>
          <button className="register__button" type="submit" aria-label="Войти" disabled={!formValues.isValid} >Войти</button>
          <p className="register__text">Еще не зарегистрированы? 
            <Link className="register__link" to="/signup" target="_self">
              Зарегистрироваться
            </Link>
          </p>
        </form>
      </section>      
    </main>

  )
}

export default Login;