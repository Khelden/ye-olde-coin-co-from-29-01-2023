import React from 'react'
import { client } from '../../lib/client'
import BronzeAustralianCoinsCard from '../../components/BronzeAustralianCoinsCard'

export default function Shop({ bronze_australian_coins_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Bronze Australian coins 1911 to 1964</h1>
            </div>
            <div className="shop-list">
                {bronze_australian_coins_products?.map((bronze_australian_coins_product) => <BronzeAustralianCoinsCard key={bronze_australian_coins_product._id} bronze_australian_coins_product={bronze_australian_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "bronze_australian_coins_product"]';
    const bronze_australian_coins_products = await client.fetch(query);
  
    return {
      props: { bronze_australian_coins_products }
    }
  }