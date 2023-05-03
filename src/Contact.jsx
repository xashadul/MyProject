
import react, { useState } from 'react';


const Contact=()=>{

   const [inputbox,setinput]=useState({
      fname:'',
      phone:'',
      gmail:'',
      message:''

   });


   const inputEvent=(event)=>{
         const {value,name}=event.target;
         setinput((olditems)=>{
            return{ ...olditems,
               [name]:value
            }
         })
   }
 


 return (
    <>   
         <div className="ContactDiv">
         <h1 className='contact_heading'>Contact us</h1>
             <div className="innerdiv">
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    alert(`hey ${inputbox.fname} ,your phone number is ${inputbox.phone} and email is ${inputbox.gmail}....you want to tell ${inputbox.message}..
                    thank you..!`)
                       }}>
                        <label className='fname'>Full Name </label>
                        <input 
                           type='text' 
                           placeholder='enter your name'
                           onChange={inputEvent}
                           name='fname'
                           alue={inputbox.fname}
                           
                        />

                        <label  className='Phone'>Phone</label>
                        <input 
                           type='text' 
                           placeholder='enter your name'
                           onChange={inputEvent}
                           name='phone'
                           value={inputbox.phone}
                        />

                        <label  className='Email'>Email adress</label>
                        <input 
                           type='text' 
                           placeholder='enter your name'
                           onChange={inputEvent}
                           name='gmail'
                           value={inputbox.gmail}
                        />

                        <label  className='fname'>Messege</label>
                        <textarea  
                             placeholder='enter your name'
                             onChange={inputEvent}
                           name='message'
                           alue={inputbox.message}
                             
                        />

                        <button>Submit from</button>
                </form>
           </div>
         </div>
    
    </>
 )
}



export default Contact;