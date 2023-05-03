import React from "react";
import { NavLink } from "react-router-dom";

import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const Navbtn=()=>{
    return(<>
       <div className="menubtn">
            <NavLink  className='btn' to='/' Component={Home} exact='true'>Home</NavLink>
            <NavLink className='btn' to='/services' Component={Services} >Services</NavLink>
            <NavLink className='btn' to='/about' Component={Home} >about</NavLink>
            <NavLink className='btn' to='/contact' Component={Contact} >Contact</NavLink>
       </div>
        
    
    </>)
}


export default Navbtn;

