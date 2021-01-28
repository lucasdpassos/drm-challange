import styled from 'styled-components'

export default function Bottle() {
    
    return (
        <div>
            <BottleImg src="/final-home.jpg" />
            
            <BottleP>60%<br />
Chardonnay<br />
40%<br />
Pinot Noir,<br />
matured<br />
12 months</BottleP>

        </div>
    )
}


export const BottleImg = styled.img`    
    width: 330px;
    height: 460px;
    position: fixed;
    top: 2%;
    right:1%;
    overflow:hidden;

    @media screen and (max-width: 1653px) {
        width:300px;
    }

    @media screen and (max-width: 1441px) {
        width:240px;
        height:310px;
    }

    @media screen and (max-width: 1305px) {
        width:210px;
        height:330px;
    }
    @media screen and (max-width: 1094px) {
        width:200px;
        height:320px;
    }
    @media screen and (max-width: 888px) {
        width:180px;
        height:300px;
    }

    @media screen and (max-width: 788px) {
        right:50%;
        top:%0.2;
        width:380px;
        height:480px;
        position:absolute;
    }
    @media screen and (max-width: 625px) {
        width:300px;
        height:400px;
    }
`


export const BottleP = styled.p`
    font-size:43px;
    position:fixed;    
    top:47%;
    right:2%;
    text-align:right;
    
    @media screen and (max-width: 2705px) {
        top:40%;
    }

    @media screen and (max-width: 1441px) {
        top:30%;
        font-size:28px;
    }
    @media screen and (max-width: 1094px) {
        top:30%;
    }
    
    @media screen and (max-width: 788px) {
        right:2%;
        top:1%;
        font-size:40px;        
        position:absolute;
    }
    
    
   
`