import React from 'react'
import { client } from '../../lib/client'
import Product from '../../components/ProductCard'

export default function Shop( ) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Hand made coins - Dark Ages to Renaissance, circa 500 AD - 1650 AD</h1>
            </div>
            <div className="shop-list">
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