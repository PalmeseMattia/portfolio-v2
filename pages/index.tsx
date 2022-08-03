import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <p>{'/*'}</p>
        <p className={styles.largetext}>
          Hello, I'm Palmese Davide Mattia, a web developer from Italy. Take a look at my portfolio
          and consider the idea of reaching out to me :)
        </p>
      <p>{'*/'}</p>

      <h1>
        <span className={styles.lightviolet}>const </span>
        <span className={styles.yellow}>Palmese Davide Mattia</span>
        <span className={styles.pink}> = new </span>
        <span className={styles.lightblue}>Developer();</span>
      </h1>
      
      <h1>
        <span className={styles.lightviolet}>const </span>
        <span className={styles.yellow}>Nationality</span>
        <span className={styles.pink}> = </span>
        <span className={styles.lightblue}>countries.Italy;</span>
      </h1>

      <h1>
        <span className={styles.lightviolet}>const </span>
        <span className={styles.yellow}>GitHub</span>
        <span className={styles.pink}> = </span>
        <span className={styles.lightblue}>
          <a href='https://github.com/PalmeseMattia'
             target='blank'>Mattia.GitHub;
          </a>
        </span>
      </h1>

      <h1>
        <span className={styles.lightviolet}>const </span>
        <span className={styles.yellow}>Email</span>
        <span className={styles.pink}> = </span>
        <span className={styles.lightblue}>"palmesedavidemattia@gmail.com";</span>
      </h1>

      <p>{'/*'}</p>
        <p className={styles.largetext}>
          Projects and Cool Stuff
        </p>
      <p>{'*/'}</p>

      <h1>
        <span className={styles.lightviolet}>const </span>
        <span className={styles.yellow}>Projects</span>
        <span className={styles.pink}> = </span>
        <span className={styles.lightblue}>{'['}</span>
      </h1>

      {/*  PROJECTS COMPONENT */}

      <h1 className={styles.lightblue}>{']'}</h1>

    </div>
  )
}

export default Home

