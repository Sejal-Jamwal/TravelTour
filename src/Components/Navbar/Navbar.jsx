import React ,  {useState} from 'react'
import './navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

   const[active, setActive]=useState('navBar');

   const toggleFunction=()=>{
       setActive('navBar activeNavbar');
   }

   const closeFunction=()=>{
      setActive('navBar');
   }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><SiYourtraveldottv className="icon" /> Travel </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink"> Home </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> Packages </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> Shop </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> About </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> Pages </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> News </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink"> Contact </a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>

          </ul>
          
          <div className="closeNavbar" onClick={closeFunction}>
          <IoMdCloseCircleOutline className="icon" />
          </div>

        </div>
        
        <div className="toggleNavbar" onClick={toggleFunction}>
        <TbGridDots className="icon"/>
        </div>


      </header>

    </section>
  )
}

export default Navbar
