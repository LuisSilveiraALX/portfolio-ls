import './home.css'
import HeaderSocials from './HeaderSocials'
import 'animate.css'
import SideBar from '../sidebar/SideBar'
import Resume from '../resume/Resume'

const Home = () => {
  return (
    <>
    <section className="home container" id="home">
      <SideBar />
      <div className="intro">
        
        <h1 class="animate__animated animate__bounceInUp">Luis Silveira</h1>
          <span className="textweb">Web Developer and UI Designer</span>
        <HeaderSocials />

        <a href="#contact" className="btn">Contact</a>

      </div>
    </section>
    </>
  )
}

export default Home