import React,{useState} from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/pizzaLogo.png'
import { NavLink } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {

    const [openLinks, setopenLinks] = useState(false)

    const toggleNavbar=()=>{
        setopenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ?"open":"close"}>
        <img src={Logo} /> 
        <div className="hiddenLinks">
          <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/"} >Home</NavLink>
          <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/menu"} >Menu</NavLink>
          <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/about"} >About</NavLink>
          <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/contact"} >Contact</NavLink>
        </div>
      </div>
      <div className="rightSide">
        <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/"} >Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/menu"}>Menu</NavLink>
        <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/about"}>About</NavLink>
        <NavLink className={(e)=>{return e.isActive?"active_nav":""}} to={"/contact"}>Contact</NavLink>
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
