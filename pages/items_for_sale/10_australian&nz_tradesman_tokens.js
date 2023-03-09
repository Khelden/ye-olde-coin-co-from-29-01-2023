import React from 'react'
import { client } from '../../lib/client'
import AustralianNZTradesmanCoinCard from '../../components/AustralianNZTradesmanCoinCard'

export default function Shop({ australian_and_nz_tradesman_tokens_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Australian & NZ Tradesman Tokens</h1>
            </div>
            <div className="shop-list">
                {australian_and_nz_tradesman_tokens_products?.map((australian_and_nz_tradesman_tokens_product) => <AustralianNZTradesmanCoinCard key={australian_and_nz_tradesman_tokens_product._id} australian_and_nz_tradesman_tokens_product={australian_and_nz_tradesman_tokens_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "australian_and_nz_tradesman_tokens_product"]';
    const australian_and_nz_tradesman_tokens_products = await client.fetch(query);
  
    return {
      props: { australian_and_nz_tradesman_tokens_products }
    }
  }