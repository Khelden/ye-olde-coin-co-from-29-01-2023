import React from 'react'
import { client } from '../../lib/client'
import AustralianPreDecimalCoinsCard from '../../components/AustralianPreDecimalCoinsCard'

export default function Shop({ australian_pre_decimal_and_decimal_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Australian Pre-Decimal & Decimal BANKNOTES 1910s-1990s</h1>
            </div>
            <div className="shop-list">
                {australian_pre_decimal_and_decimal_products?.map((australian_pre_decimal_and_decimal_product) => <AustralianPreDecimalCoinsCard key={australian_pre_decimal_and_decimal_product._id} australian_pre_decimal_and_decimal_product={australian_pre_decimal_and_decimal_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "australian_pre_decimal_and_decimal_product"]';
    const australian_pre_decimal_and_decimal_products = await client.fetch(query);
  
    return {
      props: { australian_pre_decimal_and_decimal_products }
    }
  }