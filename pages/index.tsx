import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { setUserAuthTOken } from '../store/actions/actionsMain'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setUserAuthTOken("sdb njn djkvfnjkdjkcvndsjknd"))
  })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog website for demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <SearchBar />


      
    </div>
  )
}

export default Home
