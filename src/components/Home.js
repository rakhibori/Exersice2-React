import React, { Component } from 'react';
// import '../styles/home.scss'
import {Div, Img1, Img2, Img3, Img4, Img5, PrevButton, NextButton} from '../components/styled_components/HomeStyle'
import img1 from '../images/1.avif'
import img2 from '../images/2.avif'
import img3 from '../images/3.avif'
import img4 from '../images/4.avif'
import img5 from '../images/5.avif'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
    }

    counterDownHandler = () => {
        if(this.state.counter>0){
            this.setState({counter: this.state.counter-1}) 
        }      
    }

    counterUpHandler = () => {
        if(this.state.counter<4){
            this.setState({counter: this.state.counter+1}) 
        }   
    }

    render() { 
        const{counter} = this.state
        return (
            <Div>
                <Img1 src={img1} alt='img1' className='img1' counter={counter}></Img1>
                <Img2 src={img2} alt='img2' className='img2' count={counter}></Img2>
                <Img3 src={img3} alt='img3' className='img3' count={counter}></Img3>
                <Img4 src={img4} alt='img4' className='img4' count={counter}></Img4>
                <Img5 src={img5} alt='img5' className='img5' count={counter}></Img5>
                
                <PrevButton onClick={this.counterDownHandler}>Pervious</PrevButton>
                <NextButton onClick={this.counterUpHandler} style={{marginTop:'-200px'}}>Next</NextButton>
            </Div>
        );
    }
}
 
export default Home;