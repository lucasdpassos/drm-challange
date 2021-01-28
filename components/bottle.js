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

`


export const BottleP = styled.p`
    font-size:43px;
    position:fixed;    
    top:47%;
    right:2%;
    text-align:right;
    
   
`