import React from 'react'
import { client } from '../../lib/client'
import AustralianStatesStampsCard from '../../components/AustralianStatesStampsCard'

export default function Shop({ australian_states_and_australian_stamps_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Australian States & Australian STAMPS, 1850 to 1990</h1>
            </div>
            <div className="shop-list">
            {australian_states_and_australian_stamps_products?.map((australian_states_and_australian_stamps_product) => <AustralianStatesStampsCard key={australian_states_and_australian_stamps_product._id} australian_states_and_australian_stamps_product={australian_states_and_australian_stamps_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "australian_states_and_australian_stamps_product"]';
    const australian_states_and_australian_stamps_products = await client.fetch(query);
  
    return {
      props: { australian_states_and_australian_stamps_products }
    }
  }