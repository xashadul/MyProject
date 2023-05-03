
import react from 'react';
import Navbtn from './Navbtn';
import { Route,Routes as Switch } from 'react-router-dom';
a
import Heading from './Heading';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Error from './Error';


const App =()=>{
    return(<>  
    <div className='home'>
        <Heading/>
        <Navbtn/>
        

    </div>
    <Switch>
            <Route path="/" Component={Home} exact/>
            <Route path="/services" Component={Services}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="*" Component={Error}/>
            
        </Switch>

    </>)


}

export default App;