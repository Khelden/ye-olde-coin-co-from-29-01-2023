import React from 'react'
import { client } from '../../lib/client'
import CoinStampBooksAlbumsAccessoriesCard from '../../components/CoinStampBooksAlbumsAccessoriesCard'

export default function Shop({ coin_and_stamp_books_albums_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Coin & stamp books, albums and accessories</h1>
            </div>
            <div className="shop-list">
                {coin_and_stamp_books_albums_products?.map((coin_and_stamp_books_albums_product) => <CoinStampBooksAlbumsAccessoriesCard key={coin_and_stamp_books_albums_product._id} coin_and_stamp_books_albums_product={coin_and_stamp_books_albums_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "coin_and_stamp_books_albums_product"]';
    const coin_and_stamp_books_albums_products = await client.fetch(query);
  
    return {
      props: { coin_and_stamp_books_albums_products }
    }
  }