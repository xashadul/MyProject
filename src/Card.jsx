import react from 'react';
import Sdata from './Sdata';


const Card=(props)=>{
 return (
    <>
   

   <div className="innerdiv">
            <div className="image">
                <img src={props.img} alt={Sdata[0].img} />
            </div>
            <div className="detail">
                <div className="para">
                    <h3> {props.h3}</h3>
                    <p>{props.p}</p>
                </div>
                <div className="btn">
                    <button>click now</button>
                </div>
            </div>
        </div>
      
    
    
    
    </>
 )
}



export default Card;