import react from 'react';
import Common from './Common';
import Web from './Web.png';

const Home=()=>{
    return (
        <>
        <Common
            h1='Grow your business with'
            h2='JashadulAsif'
            p='We are the team of talented developer making websites'
            img={Web}
            com='About'
            path='/about'
            bname='Get started'
        />
        </>
    )
}



export default Home;