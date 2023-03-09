import React from 'react'
import { client } from '../../lib/client'
import BritishMachineMadeMilledCard from '../../components/BritishMachineMadeMilledCard'

export default function Shop({ british_machine_made_or_milled_coins_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">British Machine Made or Milled coins circa 1650 - 1950 AD</h1>
            </div>
            <div className="shop-list">
                {british_machine_made_or_milled_coins_products?.map((british_machine_made_or_milled_coins_product) => <BritishMachineMadeMilledCard key={british_machine_made_or_milled_coins_product._id} british_machine_made_or_milled_coins_product={british_machine_made_or_milled_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "british_machine_made_or_milled_coins_product"]';
    const british_machine_made_or_milled_coins_products = await client.fetch(query);
  
    return {
      props: { british_machine_made_or_milled_coins_products }
    }
  }