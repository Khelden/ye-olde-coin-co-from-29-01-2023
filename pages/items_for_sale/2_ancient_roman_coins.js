
import React from 'react'
import { client } from '../../lib/client'
import Roman from '../../components/AncientRomanCoinCard'

export default function Shop( { ancient_roman_coin_products } ) {
    console.log(ancient_roman_coin_products)
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Ancient Roman coins circa 200 BC to 200 AD.</h1>
            </div>
            <div className="shop-list">
            {ancient_roman_coin_products?.map((ancient_roman_coin_product) => <Roman key={ancient_roman_coin_product._id} ancient_roman_coin_product={ancient_roman_coin_product}/> )}

            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "ancient_roman_coin_product"]';
    const ancient_roman_coin_products = await client.fetch(query);
  
    return {
      props: { ancient_roman_coin_products }
    }
  }