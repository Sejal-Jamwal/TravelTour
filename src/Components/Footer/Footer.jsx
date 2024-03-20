import React from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
       
       <div className="videoDiv">
        <video src={video2} autoPlay loop muted></video>
       </div>

       <div className="secContent container">
         
          <div className="contactDiv flex">
             <div className="text">
             <small>KEEP IN TOUCH</small>
             <h2>Travel with Us</h2>
             </div>

          <div className="inputDiv flex">
            <input type='text' placeholder='Enter your Email Address'></input>
            <button className="btn flex" type="submit">SEND</button>
          </div>

          </div>

          <div className="footerCard flex"> 
             <div className="footerIntro flex">
               
               <div className="logoDiv">
                <a href="#" className='logo flex'><SiYourtraveldottv className="icon"/> Travel</a>
               </div>

               <div className="footerParagraph">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>

               <div className="footerSocials flex">
               <FaTwitter className="icon"></FaTwitter>
               <FaInstagramSquare className="icon"></FaInstagramSquare>
               <FaTripadvisor className="icon"></FaTripadvisor>
               <FaYoutube className="icon"></FaYoutube>
               </div>

             </div>

             <div className="footerLinks grid">

               <div className="linkGroup">
                  
                  <span className="groupTitle">OUR AGENCY</span>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Services
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Insurance
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Agency
                  </li>
                  
                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Tourism
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Payment
                  </li>
               </div>

               <div className="linkGroup">
                  
                  <span className="groupTitle">PARTNERS</span>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>BookKings
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>RentCars
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>HotelWizards
                  </li>
                  
                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>Trivago
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon"/>TripAdvisor
                  </li>
               </div>
              
             </div>

          </div>   

       </div>

    </section>
  )
}

export default Footer
