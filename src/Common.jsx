import React from "react";
import { NavLink } from 'react-router-dom';

 import About from './About';



const Common=(props)=>{
    return (<>
        <div className='innerDiv'>
            <div className="leftSec">
                <div className="para">
                    <h1>{props.h1}</h1>
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                </div>
                <div className="leftSec_btn">
                    <NavLink to={props.path} className='btn' Component={props.com}>{props.bname}</NavLink>         
                </div>
            </div>
            <div className="rightSec">
                <img src={props.img}/>
            </div>
        </div>




</>)
} 

export default Common;