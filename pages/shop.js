
import React from 'react'
import { client } from '../lib/client'
import Product from '../components/ProductCard'

export default function Shop({ products }) {
    console.log(products)
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Have a Browse and Shop! </h1>
            </div>
            <div className="shop-list">
                {products?.map((product) => <Product key={product._id} product={product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    return {
      props: { products }
    }
  }