import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './sidebar.css'
import 'animate.css';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BsPerson, BsBriefcase} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'

const SideBar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
    <aside className={toggle ? 'aside show-menu' : 'aside'}>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <AiOutlineHome />
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
              <BsPerson />
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#resume" className="nav__link">
              <FaGraduationCap />
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
              <BsBriefcase />
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <AiOutlineMail />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; LS 2022 - 2023.</span>
      </div>
    </aside>


    <div className={toggle ? 'nav__toggle nav__toggle-open ' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
</>
  );
};

export default SideBar