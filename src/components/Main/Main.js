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
    <>        
      <Header loggedIn={loggedIn} headerClassName={headerClassName}/>
        <main>
          <Promo/>
          <NavTab/>
          <AboutProject/>
          <Techs/>
          <Portfolio/>        
        </main>
      <Footer/>
    </>

  )
}

export default Main