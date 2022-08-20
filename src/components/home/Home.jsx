import './home.css'
import Me from '../../assets/avatar-1.png'
import HeaderSocials from './HeaderSocials'
import 'animate.css'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 class="animate__animated animate__bounceInUp">Luis Silveira</h1>
          <span className="textweb">Web Developer and UI Designer</span>
        <HeaderSocials />

        <a href="#contact" className="btn">Contacto</a>

      </div>
    </section>
  )
}

export default Home