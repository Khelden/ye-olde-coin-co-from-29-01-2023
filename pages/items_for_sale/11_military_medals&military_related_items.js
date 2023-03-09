import React from 'react'
import { client } from '../../lib/client'
import MilitaryMedalsCoinCard from '../../components/MilitaryMedalsCoinCard'

export default function Shop({ military_medals_military_items_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Military Medals and Military Related Items, circa 1900-1990s</h1>
            </div>
            <div className="shop-list">
                {military_medals_military_items_products?.map((military_medals_military_items_product) => <MilitaryMedalsCoinCard key={military_medals_military_items_product._id} military_medals_military_items_product={military_medals_military_items_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "military_medals_military_items_product"]';
    const military_medals_military_items_products = await client.fetch(query);
  
    return {
      props: { military_medals_military_items_products }
    }
  }