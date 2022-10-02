import AboutProject from "../AboutProject/AboutProject"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import NavTab from "../NavTab/NavTab"
import Portfolio from "../Portfolio/Portfolio"
import Promo from "../Promo/Promo"
import Techs from "../Techs/Techs"

const Main = () => {

  const loggedIn = true;
  const headerClassName = 'header_pink'
  return( 
    <main>
      <Header loggedIn={loggedIn} headerClassName={headerClassName}/>
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <Portfolio/>
      <Footer/>
    </main>
  )
}

export default Main