import React from 'react';
import './styles/main.scss'
import {Link, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Movies from './components/Movies';


class App  extends React.Component {

    render() { 
       
        return (

           <div className='mainBox'>
                <div className='linkBox'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/movies' className='link'>Movies</Link>
                    <Link to='/aboutus' className='link'>AboutUs</Link>
                </div>
                <div style={{display:'flex'}}>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>  
                        <Route path='/movies' element={<Movies/>}></Route> 
                        <Route path='/aboutus' element={<AboutUs/>}></Route>
                    </Routes>  
                </div>
           </div>
        );
    }
}   
 
export default App;