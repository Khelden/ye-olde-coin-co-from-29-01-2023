import React from 'react'
import { client } from '../../lib/client'
import GoldSovereignsOtherCoinsCard from '../../components/GoldSovereignsOtherCoinsCard'

export default function Shop({ gold_sovereigns_and_other_coins_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Gold Sovereigns & other Gold and Silver bulk coins</h1>
            </div>
            <div className="shop-list">
                {gold_sovereigns_and_other_coins_products?.map((gold_sovereigns_and_other_coins_product) => <GoldSovereignsOtherCoinsCard key={gold_sovereigns_and_other_coins_product._id} gold_sovereigns_and_other_coins_product={gold_sovereigns_and_other_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "gold_sovereigns_and_other_coins_product"]';
    const gold_sovereigns_and_other_coins_products = await client.fetch(query);
  
    return {
      props: { gold_sovereigns_and_other_coins_products }
    }
  }