import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <Head>
      < meta name="viewport" content="width=device-width, initial-scale=1"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
    </Head>
    <div className={styles.container}>
    <div className={styles.ageHolder}>
    <h1 className={styles.ageConfirm}>I'm 21  +</h1>
      <div className={styles.box}>
       
        </div>
        <img className={styles.pointer} src='./pointer.png' />
      </div>
      
    </div>
    </div>
  )
}
