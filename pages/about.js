import React from 'react'
import Head from 'next/head'
import styles from '../styles/About.module.css'

function Page() {
    return (
        <div className={styles.container}>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
        
        <div>
            <span className={styles.intro}>Allow us to introduce ourselves.
            Prazer! <span className={styles.introItalic}>&#123;Portuguese for: it’s nice to meet you.&#125;</span> We are D.M. a new sparkling wine brand from Brazil, with our grapes grown in the Valley of the Vineyard in Southern Brazil. An entirely new class of sparkling wine. Try us and see what we mean.</span>

            <button className={styles.shopBtn}>SHOP</button>
        <div className={styles.freeShippingWrap}>
            <div className={styles.shippingMove}>
            <p className="marquee">
                <span>FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -FREE SHIPPING - FREE SHIPPING - FREE SHIPPING -&nbsp;</span>
                </p>
               
                                
                               
            </div>
        </div>
       
        </div>

       
        </div>
        )
    
}

export default Page;