import React from 'react'
import { client } from '../../lib/client'
import HandMadeCoinsCard from '../../components/HandMadeCoinsCard'

export default function Shop( { hand_made_coins_products } ) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Hand made coins - Dark Ages to Renaissance, circa 500 AD - 1650 AD</h1>
            </div>
            <div className="shop-list">
                {hand_made_coins_products?.map((hand_made_coins_product) => <HandMadeCoinsCard key={hand_made_coins_product._id} hand_made_coins_product={hand_made_coins_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "hand_made_coins_product"]';
    const hand_made_coins_products = await client.fetch(query);
  
    return {
      props: { hand_made_coins_products }
    }
  }
