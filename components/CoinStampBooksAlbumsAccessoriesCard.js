import React from 'react'
import Link from'next/link'
import { urlFor } from '../lib/client'

export default function CoinStampBooksAlbumsAccessoriesCard ({ coin_and_stamp_books_albums_product: { image, name, slug, price} }) {
    return (
        <div className="whole-product-item">
        <div className="product-top">
            <div className="product-image">
                <Link href={`/coin_and_stamp_books_albums_product/${slug.current}`}>
                    <img src={urlFor(image && image[0])}
                    />
                </Link>
            </div>
        </div>
        <div className="product-bottom">
            <div className="product-title">
                {name}
            </div>
            <div className="price-box">
                <div className="price-regular">${price}</div>
            </div>
        </div>
        </div>

    )
}
