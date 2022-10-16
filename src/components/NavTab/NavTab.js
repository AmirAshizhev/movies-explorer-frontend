import './NavTab.css'

const NavTab = () => {
  return (
    <section className='navTab'>
      <ul className='navTab__links'>
        <li className='navTab__link'><a className='navTab__link' href='#aboutProject'>О проекте</a></li>
        <li className='navTab__link'><a className='navTab__link' href='#techs'>Технологии</a></li>
        <li className='navTab__link'><a className='navTab__link' href='#portfolio'>Студент</a></li>
      </ul>
    </section>    
  )
}

export default NavTab;