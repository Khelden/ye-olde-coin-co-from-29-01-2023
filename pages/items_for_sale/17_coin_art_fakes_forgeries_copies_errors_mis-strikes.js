import React from 'react'
import { client } from '../../lib/client'
import CoinArtForgeriesCopiesCard from '../../components/CoinArtForgeriesCopiesCard'

export default function Shop({ coin_art_forgeries_copies_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Coin Art, Fakes, Forgeries, Copies, Errors, Mis-strikes</h1>
            </div>
            <div className="shop-list">
                {coin_art_forgeries_copies_products?.map((coin_art_forgeries_copies_product) => <CoinArtForgeriesCopiesCard key={coin_art_forgeries_copies_product._id} coin_art_forgeries_copies_product={coin_art_forgeries_copies_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "coin_art_forgeries_copies_product"]';
    const coin_art_forgeries_copies_products = await client.fetch(query);
  
    return {
      props: { coin_art_forgeries_copies_products }
    }
  }