import React, { Component } from 'react';
import '../styles/aboutus.scss'
import img from '../images/me.jpg'

class AboutUs extends Component {
    state = {  } 
    render() { 
        return (
            <div className='aboutBox'>

                <div className='picBox'>
                    <img src={img} alt='img'></img>
                </div>
                
                <div className='textBox'>
                    <p>Name : Rakhsha</p>
                    <p>Family: Borhani</p>
                    <p>Age: 38</p>
                    <p>Email : Rakhsha.b@yahoo.com</p>
                    <p>Education : Computer Software Engineer From Lahijan Azad University</p>
                    <p>From : Rasht</p>
                    <p>Job : Supervisor Of (IT) In Phase 17-18 Of South Pars Asalouye</p>
                </div>
                
            </div>
        );
    }
}
 
export default AboutUs;