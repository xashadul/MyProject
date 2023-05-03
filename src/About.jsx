import react from 'react';
import Common from './Common';
import Web from './Web1.png';

const About=()=>{
 return (
    <>
        <Common
            h1='Welcome to About page'
            h2='ThapaTechnical'
            p='We are the team of talented developer making websites'
            img={Web}
            com='Contact'
            path='/contact'
            bname='contact us'
        />
    </>
 )
}



export default About;