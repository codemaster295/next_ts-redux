import Head from 'next/head'
import React from 'react'
import BlogCreate from '../components/BlogCreate'
import Navbar from '../components/Navbar'


const createblog = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Blog website for demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<BlogCreate />
		</div>
	)
}

export default createblog
