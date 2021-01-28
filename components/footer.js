import styles from '../styles/About.module.css'
import styled from 'styled-components'

export default function Footer() {
    
    return (

        <div>
            
           <FixedFooter>aaaa</FixedFooter>
          
        </div>
    )
}

export const FixedFooter = styled.div`
    height: 200px;
    width: 100%;
    background-color: #000;
    position: fixed;
    bottom: 0;
    z-index: -100;
    color: white;
    text-align: center;
    font-size: 20pt;


`