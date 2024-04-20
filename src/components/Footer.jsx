import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"


const Footer = () => {
  return (
    <div className='footer'> 
      <div className="socialMedia">
        <InstagramIcon/><FacebookIcon/><LinkedInIcon/>
      </div>
      <p> &copy; 2023 royspizzeria.com</p>
    </div>
  )
}

export default Footer
