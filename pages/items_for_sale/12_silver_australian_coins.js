import React from 'react'
import { client } from '../../lib/client'
import SilverAustralianCoinsCard from '../../components/SilverAustralianCoinsCard'

export default function Shop({ silver_australian_coins_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Silver Australian coins 1910-1966</h1>
            </div>
            <div className="shop-list">
                {silver_australian_coins_products?.map((silver_australian_coins_product) => <SilverAustralianCoinsCard key={silver_australian_coins_product._id} silver_australian_coins_product={silver_australian_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "silver_australian_coins_product"]';
    const silver_australian_coins_products = await client.fetch(query);
  
    return {
      props: { silver_australian_coins_products }
    }
  }