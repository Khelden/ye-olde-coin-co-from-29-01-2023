import React from 'react'
import { client } from '../../lib/client'
import WorldCoinsNotesStampsCard from '../../components/WorldCoinsNotesStampsCard'

export default function Shop({ world_coins_notes_stamps_odds_ends_products }) {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
    
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">World coins, notes, stamps, odds & ends</h1>
            </div>
            <div className="shop-list">
                {world_coins_notes_stamps_odds_ends_products?.map((world_coins_notes_stamps_odds_ends_product) => <WorldCoinsNotesStampsCard key={world_coins_notes_stamps_odds_ends_product._id} world_coins_notes_stamps_odds_ends_product={world_coins_notes_stamps_odds_ends_product}/> )}
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "world_coins_notes_stamps_odds_ends_product"]';
    const world_coins_notes_stamps_odds_ends_products = await client.fetch(query);
  
    return {
      props: { world_coins_notes_stamps_odds_ends_products }
    }
  }