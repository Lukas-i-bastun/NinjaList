import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../Comps/Navbar'
import Footer from '../Comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt veritatis, rem, et iste voluptatibus reiciendis mollitia excepturi labore aliquam nam officiis quis doloribus aperiam qui optio reprehenderit saepe aut.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt veritatis, rem, et iste voluptatibus reiciendis mollitia excepturi labore aliquam nam officiis quis doloribus aperiam qui optio reprehenderit saepe aut.</p>
      <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    </div>
    </>
  )
}
