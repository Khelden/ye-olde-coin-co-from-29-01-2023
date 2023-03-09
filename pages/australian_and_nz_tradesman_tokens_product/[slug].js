import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ australian_and_nz_tradesman_tokens_product, australian_and_nz_tradesman_tokens_products }) => {
    const { image, name, details, price } = australian_and_nz_tradesman_tokens_product;
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
    const query = `*[_type == "australian_and_nz_tradesman_tokens_product"] {
        slug {
            current
        }
    }
    `;
    const australian_and_nz_tradesman_tokens_products = await client.fetch(query);

    const paths = australian_and_nz_tradesman_tokens_products.map((australian_and_nz_tradesman_tokens_product) => ({
        params: {
            slug: australian_and_nz_tradesman_tokens_product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ( {params: { slug }}) => {
    const query = `*[_type == "australian_and_nz_tradesman_tokens_product" && slug.current == '${slug}'][0]`;
    const australian_and_nz_tradesman_tokens_productsQuery = '*[_type == "australian_and_nz_tradesman_tokens_product"]'
    const australian_and_nz_tradesman_tokens_product = await client.fetch(query);
    const australian_and_nz_tradesman_tokens_products = await client.fetch(australian_and_nz_tradesman_tokens_productsQuery);

  
    return {
      props: { australian_and_nz_tradesman_tokens_products, australian_and_nz_tradesman_tokens_product }
    }
  }

export default ProductDetails