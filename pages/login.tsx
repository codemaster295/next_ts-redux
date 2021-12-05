import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
const Login = () => {
  return (

    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog website for demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LoginForm />
    </div>
  )
}

export default Login
