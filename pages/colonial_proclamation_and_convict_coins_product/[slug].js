import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ colonial_proclamation_and_convict_coins_product, colonial_proclamation_and_convict_coins_products }) => {
    const { image, name, details, price } = colonial_proclamation_and_convict_coins_product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }
  return (
    <div>
        <div className="product-detail-container">
            <di>
                <div className="image-container">
                    <img src={urlFor(image && image[0])}/>
                </div>
            </di>
            <div className="product-details-desc">
                <h1>{name}</h1>
                <h4>Details:</h4>
                <p>{details}</p>
                <p className="price">${price}</p>
                {/* Below section has been commented out to remove the shopping cart functionality, as we will not be using Stripe in this build.}
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                        <span className="minus" onClick={decQty}> <AiOutlineMinus /></span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}> <AiOutlinePlus /></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                </div>
  */}
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "colonial_proclamation_and_convict_coins_product"] {
        slug {
            current
        }
    }
    `;
    const colonial_proclamation_and_convict_coins_products = await client.fetch(query);

    const paths = colonial_proclamation_and_convict_coins_products.map((colonial_proclamation_and_convict_coins_product) => ({
        params: {
            slug: colonial_proclamation_and_convict_coins_product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ( {params: { slug }}) => {
    const query = `*[_type == "colonial_proclamation_and_convict_coins_product" && slug.current == '${slug}'][0]`;
    const colonial_proclamation_and_convict_coins_productsQuery = '*[_type == "colonial_proclamation_and_convict_coins_product"]'
    const colonial_proclamation_and_convict_coins_product = await client.fetch(query);
    const colonial_proclamation_and_convict_coins_products = await client.fetch(colonial_proclamation_and_convict_coins_productsQuery);

  
    return {
      props: { colonial_proclamation_and_convict_coins_products, colonial_proclamation_and_convict_coins_product }
    }
  }

export default ProductDetails