import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import ProductDetailComponent from '../../components/ProductDetailComponent'

const index = () => {
    const router = useRouter()
    const ProductData = useSelector((state: any) => state.product)
    const { productId } = router.query
    console.log(productId)
    let Product = ProductData.find((x) => {
        return x._id === productId
    })
    console.log(Product)
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Product page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <ProductDetailComponent Product={Product} />
        </div>
    )
}

export default index
