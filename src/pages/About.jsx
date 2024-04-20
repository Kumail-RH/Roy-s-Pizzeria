import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import '../styles/About.css'
const Adout = () => {
  return (
    <div className="about">
      <div 
      className="aboutTop" 
      style={{ backgroundImage: `url(${MultiplePizzas})`}}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sed earum neque quae obcaecati ipsam, sapiente nesciunt, quidem ipsa omnis, voluptas sequi maiores? Quasi ipsum veritatis explicabo eaque quos placeat nesciunt sed natus iure delectus numquam exercitationem illum ad eum, repellendus ducimus sequi pariatur excepturi ab cupiditate unde soluta asperiores sint dolore! Dolorum harum debitis ullam libero fugiat, .</p>
      </div>
    </div>
  )
}

export default Adout
