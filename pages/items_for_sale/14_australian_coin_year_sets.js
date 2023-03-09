import React from 'react'
import { client } from '../../lib/client'
import AustralianCoinYearSetsCard from '../../components/AustralianCoinYearSetsCard'

export default function Shop({ australian_coin_year_sets_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Australian Coin Year Sets, 1910 to 2000</h1>
            </div>
            <div className="shop-list">
                {australian_coin_year_sets_products?.map((australian_coin_year_sets_product) => <AustralianCoinYearSetsCard key={australian_coin_year_sets_product._id} australian_coin_year_sets_product={australian_coin_year_sets_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "australian_coin_year_sets_product"]';
    const australian_coin_year_sets_products = await client.fetch(query);
  
    return {
      props: { australian_coin_year_sets_products }
    }
  }