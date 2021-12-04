import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

const register = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog website for demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <RegisterForm />
      
    </div>
  )
}

export default register
