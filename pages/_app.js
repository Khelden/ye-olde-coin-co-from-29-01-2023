import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/script'
import React from 'react'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Script src="/../coding/swiper_code.js" />
      </Layout>
    </StateContext>
  )
}

export default MyApp
