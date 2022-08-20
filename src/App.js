import './App.css';
import Sidebar from './components/sidebar/SideBar'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  return (
   <>
   <Sidebar />
   <div className='main'>
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
   </div>
   </>
  );
}

export default App;
