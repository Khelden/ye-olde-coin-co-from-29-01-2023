// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import product from './product'
import ancient_roman_coin_product from './ancient_roman_coins_product'
import roman_and_byzantine_coins_product from './roman&byzantine_coins_product'
import hand_made_coins_product from './hand_made_coins_product'
import British_machine_made_or_milled_coins_product from './\'british_machine_made_or_milled_coins_product\''
import colonial_proclamation_and_convict_coins_product from './colonial_proclamation_and_convict_coins_product'
import gb_and_world_historical_medals_product from './gb_and_world_historical_medals_product'
import gold_sovereigns_and_other_coins_product from './gold_sovereigns_and_other_coins_product'
import australian_historical_medals_product from './australian_historical_medals_product'
import australian_and_nz_tradesman_tokens_product from './australian_and_nz_tradesman_tokens_product'
import military_medals_military_items_product from './military_medals_military_items_product'
import silver_australian_coins_product from './silver_australian_coins_product'
import bronze_australian_coins__product from './bronze_australian_coins__product'
import australian_coin_year_sets_product from './australian_coin_year_sets_product'
import australian_pre_decimal_and_decimal_product from './australian_pre_decimal_and_decimal_product'
import australian_states_and_australian_stamps_product from './australian_states_and_australian_stamps_product'
import coin_art_fakes_forgeries_copies_product from './coin_art_fakes_forgeries_copies_product'
import world_coins_notes_stamps_odds_ends_product from './world_coins_notes_stamps_odds_ends_product'
import coin_and_stamp_books_albums_product from './coin_and_stamp_books_albums_product'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([product, 
                            ancient_roman_coin_product,
                            roman_and_byzantine_coins_product,
                            hand_made_coins_product,
                            British_machine_made_or_milled_coins_product,
                            colonial_proclamation_and_convict_coins_product,
                            gb_and_world_historical_medals_product,
                            gold_sovereigns_and_other_coins_product,
                            australian_historical_medals_product,
                            australian_and_nz_tradesman_tokens_product,
                            military_medals_military_items_product,
                            silver_australian_coins_product,
                            bronze_australian_coins__product,
                            australian_coin_year_sets_product,
                            australian_pre_decimal_and_decimal_product,
                            australian_states_and_australian_stamps_product,
                            coin_art_fakes_forgeries_copies_product,
                            world_coins_notes_stamps_odds_ends_product,
                            coin_and_stamp_books_albums_product
    /* Your types here! */
  ]),
})
