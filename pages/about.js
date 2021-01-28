import React from 'react'
import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Bottle from '../components/bottle'
import Footer from '../components/footer'
import { useState } from 'react'
import dynamic from 'next/dynamic'




function Page() {

    

    return (
        <div>
<div className={styles.rest}>
    <div className={styles.introContainer}>
<span className={styles.intro}>Allow us to introduce ourselves.
            Prazer! <span className={styles.introItalic}>&#123;Portuguese for: it’s nice to meet you.&#125;</span> We are D.M. a new sparkling wine brand from Brazil, with our grapes grown in the Valley of the Vineyard in Southern Brazil. <span className={styles.introItalic}>An entirely new class of sparkling wine.</span> Try us and see what we mean.</span>

            <button className={styles.shopBtn}>SHOP</button>
        
</div>
<div className={styles.freeShippingWrap}>


<div className={styles.shippingMove}>
    <p className="marquee">
        <span>FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -&nbsp;</span>
        </p>
</div>
</div>
<div className={styles.introContainer}>
<div className={styles.intro2Holder}>
           
           <span className={styles.intro2}>Made in the traditional champagne method with a Brazilian touch, D.M. is sparkling wine that is uniquely flexible and versatile. <span className={styles.introItalic}>You can drink</span> D.M.  <span className={styles.introItalic}>however you like, whenever you like.</span> Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking. <span className={styles.introItalic}>It’s what makes us unmistakably Brazilian.</span></span>
           
           </div>
           </div>

           <Bottle />
</div>
<div className={styles.fixedFooter}>
    <input className={styles.footerInput} value=" Type your email..."></input>
    <button className={styles.footerSub}>Subscribe</button>

    <p className={styles.footerP}>CC Dom Maria 2020</p>
    <div className={styles.footerAHolder}>
        <a href="">Facebook</a>
        <a href="">Instagram</a>

    </div>
    <div className={styles.footerAHolder2}>
    <a href="">Privacy</a>
    <a href="">Shipping Policy</a>
    <a href="">Disclaimer</a>
    </div>
</div>





        </div>
        )
    
}

export default Page;