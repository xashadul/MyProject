import react from 'react';
import Card from './Card';
import Sdata from './Sdata';
const Services=()=>{
 return (
    <>
     <h1 className='service_heading'>our serives</h1>
     <div className="serviceDiv">
      {Sdata.map((val,index)=>{
         return(
            <>
              <Card
              img={val.img}
              h3 ={val.title}
              p={val.deccrive}
              key={index}
              />
            
            
            
            </>
         )
      })}
    </div>
    
    </>
 )
}

{/* <div className="innerdiv">
            <div className="image">
                <img src={val.img} alt={Sdata[0].img} />
            </div>
            <div className="detail">
                <div className="para">
                    <h3> {val.title}</h3>
                    <p>{val.deccrive}</p>
                </div>
                <div className="btn">
                    <button>click now</button>
                </div>
            </div>
        </div> */}

export default Services;