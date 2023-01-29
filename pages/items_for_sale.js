import React from 'react'
import { client } from '../lib/client'
import Product from '../components/ProductCard'
import Link from 'next/link'

export default function Shop() {
    return (
        <section className="showcase" id="home">
            <link rel="stylesheet" href="./css/style.css" />
            <div className="showcase_container container">
            <h1 className="showcase_title title title-main">Have a Browse and Shop! </h1>
            </div>
            <div className="shop-list">
                {/* This section is for each of the various types of coins that are for sale         */}
            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/1_ancient_coins_greek_other_cultures"><img src="/images/shop_menu_images/ancient_coins_greek_other_cultures.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Ancient Coins, Greek and Other Cultures, c 500 BC to 1000 AD</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/2_ancient_roman_coins"><img src="/images/shop_menu_images/ancient_roman_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Ancient Roman coins circa 200 BC to 200 AD </div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/3_roman&byzantine_coins"><img src="/images/shop_menu_images/roman_and_byzantine_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Roman and Byzantine Coins circa 200 AD to 1400 AD</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}

                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/4_hand_made_coins_dark_ages"><img src="/images/shop_menu_images/hand_made_coins_dark_ages.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Hand made coins - Dark Ages to Renaissance, circa 500 AD - 1650 AD.</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/5_british_machine_made_or_milled_coins"><img src="/images/shop_menu_images/british_machine_made_or_milled_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">British Machine Made or Milled coins circa 1650 - 1950 AD. </div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/6_colonial_proclamation&convict_coins"><img src="/images/shop_menu_images/colonial_proclamation_and_convict_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Colonial, Proclamation and Convict coins c1650 - 1853.</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}

                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/7_gb&world_historical_medals&medallions"><img src="/images/shop_menu_images/gb_&_world_historical_medals.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">GB & World Historical Medals and Medallions from circa 1650 - 1990.</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/8_gold_sovreigns&other_gold&silver_bulk_coins"><img src="/images/shop_menu_images/gold_sovereigns_&_other_gold.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Gold Sovereigns & other Gold and Silver bulk coins. </div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/9_australian_historical_medals&medallions"><img src="/images/shop_menu_images/australian_historical_medals_&_medallions.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Australian Historical Medals & Medallions, c1788 - 20th century.</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}

                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/10_australian&nz_tradesman_tokens"><img src="/images/shop_menu_images/australian_nz_trade_tokens.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Australian & NZ Tradesman Tokens</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/11_military_medals&military_related_items"><img src="/images/shop_menu_images/military_medals_&_military_related_items.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Military Medals and Military Related Items, circa 1900-1990s.

</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/12_silver_australian_coins"><img src="/images/shop_menu_images/silver_australian_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Silver Australian coins 1910-1966.</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}
                                        {/* This section is for each of the various types of coins that are for sale         */}
                                        <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/13_bronze_australian_coins"><img src="/images/shop_menu_images/bronze_australian_coins.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Bronze Australian coins 1911 to 1964.

</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/14_australian_coin_year_sets"><img src="/images/shop_menu_images/australian_coin_year_sets_1910-2000.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Australian Coin Year Sets, 1910 to 2000.

</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/15_australian_pre_decimal&demical_banknotes"><img src="/images/shop_menu_images/australian_pre-decimal_&_decimal_banknotes.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Australian Pre-Decimal & Decimal BANKNOTES 1910s-1990s.

</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}

                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/16_australian_states&australian_stamps"><img src="/images/shop_menu_images/australian_states_&_stamps.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Australian States & Australian STAMPS, 1850 to 1990.
</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/17_coin_art_fakes_forgeries_copies_errors_mis-strikes"><img src="/images/shop_menu_images/coin_art_fakes_forgeries_copies_errors_mistrikes.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Coin Art, Fakes, Forgeries, Copies, Errors, Mis-strikes.



</div>
            </div>
        </div>
            {/* This is the end section         */}
                            {/* This section is for each of the various types of coins that are for sale         */}
                            <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/18_world_coins_notes_stamps_odds&ends"><img src="/images/shop_menu_images/world_coins_notes_stamps_odds_ends.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">World coins, notes, stamps, odds & ends.

</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}
                                        {/* This section is for each of the various types of coins that are for sale         */}
                                        <div className="whole-product-item">
                <div className="product-top">
                    <div className="product-image">
                        <Link href="/items_for_sale/19_coin&stamp_books_albums&accessories"><img src="/images/shop_menu_images/coin&stamp_books_albums.png" /></Link> 
                    </div>
                </div>
            <div className="product-bottom">
                <div className="product-title">Coin & stamp books, albums and accessories.



</div>
            </div>
        </div>
            {/* This is the end section for each of the various types of coins that are for sale          */}

    </div>
 </section>
    )
}

