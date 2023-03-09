import React from 'react'
import { client } from '../../lib/client'
import ColonialProclamationCard from '../../components/ColonialProclamationCard'

export default function Shop( { colonial_proclamation_and_convict_coins_products } ) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Colonial, Proclamation and Convict coins c1650 - 1853</h1>
            </div>
            <div className="shop-list">
                {colonial_proclamation_and_convict_coins_products?.map((colonial_proclamation_and_convict_coins_product) => <ColonialProclamationCard key={colonial_proclamation_and_convict_coins_product._id} colonial_proclamation_and_convict_coins_product={colonial_proclamation_and_convict_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "colonial_proclamation_and_convict_coins_product"]';
    const colonial_proclamation_and_convict_coins_products = await client.fetch(query);
  
    return {
      props: { colonial_proclamation_and_convict_coins_products }
    }
  }