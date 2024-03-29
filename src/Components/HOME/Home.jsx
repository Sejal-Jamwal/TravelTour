import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="home">
       
       <div className="overlay"></div>
       
       <video src={video} muted autoPlay loop type="video/mp4"></video>
         
       <div className="homeContent container">

        <div className="textDiv">

          <span className="smallText">
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search your Holiday
          </h1>

        </div>
         
       <div className="cardDiv grid">

        <div className="destinationInput">
          <label htmlFor="city">Search your Destination:</label>
          <div className="input flex"> 
          <input type="text" placeholder='Enter name..'/>
          <FaLocationDot className="icon"/> 
          </div>
        </div>

        <div className="dateInput">
          <label htmlFor="date">Select your Date:</label>
          <div className="input flex"> 
          <input type="date" placeholder='Enter name..'/>
          </div>
        </div>

        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max Price</label>
              <h3 className="total">$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max="5000" min="1000"/>
          </div>
        </div>

        <div className="searchOptions flex">
          
        </div>

       </div>
       </div>  

    </section>
  )
}

export default Home
