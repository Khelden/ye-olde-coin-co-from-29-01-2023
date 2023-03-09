import React from 'react'
import { client } from '../../lib/client'
import AustralianHistoricalMedalsCoinCard from '../../components/AustralianHistoricalMedalsCoinCard'

export default function Shop({ australian_historical_medals_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Australian Historical Medals & Medallions, c1788 - 20th century</h1>
            </div>
            <div className="shop-list">
                {australian_historical_medals_products?.map((australian_historical_medals_product) => <AustralianHistoricalMedalsCoinCard key={australian_historical_medals_product._id} australian_historical_medals_product={australian_historical_medals_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "australian_historical_medals_product"]';
    const australian_historical_medals_products = await client.fetch(query);
  
    return {
      props: { australian_historical_medals_products }
    }
  }