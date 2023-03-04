import React from 'react'
import { client } from '../../lib/client'
import RomanByzantineCoinCard from '../../components/Roman&Byzantine_CoinsCard'

export default function Shop( { roman_and_byzantine_coins_products } ) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Roman and Byzantine Coins circa 200 AD to 1400 AD</h1>
            </div>
            <div className="shop-list">
            {roman_and_byzantine_coins_products?.map((roman_and_byzantine_coins_product) => <RomanByzantineCoinCard key={roman_and_byzantine_coins_product._id} roman_and_byzantine_coins_product={roman_and_byzantine_coins_product}/> )}

            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "roman_and_byzantine_coins_product"]';
    const roman_and_byzantine_coins_products = await client.fetch(query);
  
    return {
      props: { roman_and_byzantine_coins_products }
    }
  }


  