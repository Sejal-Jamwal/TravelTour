import React from 'react'
import './Main.css'
import img from  '../../Assets/bora.jpg'
import img2 from  '../../Assets/img2.jpg'
import img3 from  '../../Assets/img3.jpg'
import img4 from  '../../Assets/img4.jpg'
import img5 from  '../../Assets/img5.jpg'
import img6 from  '../../Assets/img6.jpg'
import img7 from  '../../Assets/img7.jpg'
import img8 from  '../../Assets/img8.jpg'
import img9 from  '../../Assets/img9.jpg'


const Data = [
   {
      id:1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:2,
      imgSrc: img2,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:3,
      imgSrc: img3,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:4,
      imgSrc: img4,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:5,
      imgSrc: img5,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:6,
      imgSrc: img6,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:7,
      imgSrc: img7,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:8,
      imgSrc: img8,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   },

   {
      id:9,
      imgSrc: img9,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '500$',
      description:' wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow '

   }

]

const Main = () => {
  return (

     <section className="main container section">

      <div className="secTitle">
         <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
         {
            Data.map(({id, imgSrc, destTitle,  location, grade, fees, description})=>{
               return (
                  <div key={id} className="singleDestination">

                     <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle}></img>
                     </div>

                     <div className="cardInfo">
                        <h4 className="desTitle">{destTitle}</h4>
                        {/*<span className="continent flex"><FaLocationDot className="icon" /></span>*/}
                        
                        <span className="name">{location}</span>
                           
                      
                        
                        <div className="fees flex">
                           <div className="grade">
                              <span>{grade}<small>+1</small></span>
                           </div>
                           
                           <div className="price">
                              <h5>{fees}</h5>
                           </div>
                        </div>

                        <div className="desc">
                           <p>{description}</p>
                        </div>
                        
                        <button className="btn flex">
                           DETAILS
                        </button>

                     </div>
                  </div>
               )
            })
         }
        
      </div>

     </section>

    
  )
}

export default Main
