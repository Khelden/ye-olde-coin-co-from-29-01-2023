import React from 'react'
import { client } from '../lib/client'

export default function Home( ) {
  return (
    <main>
      <link rel="stylesheet" href="./css/style.css" />
      {/* SHOWCASE */}
      <section className="showcase" id="home">  
        <div className="showcase_container container">
          <h1 className="showcase_title title title-main">Welcome to Ye Olde Coin Co. Coin Dealers Adelaide South Australia</h1>
          <picture className="showcase_image">
            <img src="/images/Homepage_image.png" />
          </picture>
        </div>
      </section>
    {/* PORTFOLIO */}
    <section className="services" id="services">
      <div className="services_container container">
        <div className="services_metadata section-metadata">
          <h2 className="title">To place an order</h2>
          <p className="section-metadata_description">This can be done by phone (08 8165 3446 noon-6pm, 7 days) 
                    or by cutting & pasting items of interest into an email, or by sending an email describing 
                    what you wish to purchase.</p>
        </div>
        <div className="services_image-wrapper">
          <img src="/images/ten5a-removebg-preview.png" />  
        </div>
      </div>
    </section>
    </main>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}