import React from 'react'
import { client } from '../../lib/client'
import GBWorldHistoricalCard from '../../components/GBWorldHistoricalCard'

export default function Shop({ gb_and_world_historical_medals_products } ) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">GB & World Historical Medals and Medallions from circa 1650 - 1990</h1>
            </div>
            <div className="shop-list">
                {gb_and_world_historical_medals_products?.map((gb_and_world_historical_medals_product) => <GBWorldHistoricalCard key={gb_and_world_historical_medals_product._id} gb_and_world_historical_medals_product={gb_and_world_historical_medals_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "gb_and_world_historical_medals_product"]';
    const gb_and_world_historical_medals_products = await client.fetch(query);
  
    return {
      props: { gb_and_world_historical_medals_products }
    }
  }