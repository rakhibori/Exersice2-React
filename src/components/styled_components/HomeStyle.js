import styled from 'styled-components'

const Div = styled.div `
    margin:20px auto;
    border:2px solid #ccc;
    width:70%;
    height:400px;
    position:relative;
    border-radius:15px;
`

const Img1 = styled.img`
width:100%; 
height:400px; 
border-radius:15px;
display: ${(props) => (props.counter === 0 ? 'block' : 'none')};  
`

const Img2 = styled.img`
width:100%; 
height:400px; 
border-radius:15px;
display: ${(props) => (props.count === 1 ? 'block' : 'none')};   
`

const Img3 = styled.img`
width:100%; 
height:400px; 
border-radius:15px;
display: ${(props) => (props.count === 2 ? 'block' : 'none')};  
`

const Img4 = styled.img`
width:100%; 
height:400px; 
border-radius:15px;
display: ${(props) => (props.count === 3 ? 'block' : 'none')};  
`

const Img5 = styled.img`
width:100%; 
height:400px; 
border-radius:15px;
display: ${(props) => (props.count === 4 ? 'block' : 'none')};  
`

const PrevButton = styled.button`
    width:80px;
    height:35px;
    position:absolute;
    bottom:180px;
    margin-left:10px;
    cursor:pointer;
    border:none;
    background-color:#DCDCDC;
    border-radius:50px;
    &:hover{
        background-color: #FFF8DC;
    }
`

const NextButton = styled.button`
    width:80px;
    height:35px;
    position:absolute;
    bottom:180px;
    margin-left:945px;
    cursor:pointer;
    border:none;
    background-color:#DCDCDC;
    border-radius:50px;
    &:hover{
        background-color: #FFF8DC;
    }
`

export {Div, Img1, Img2, Img3, Img4, Img5, PrevButton, NextButton}