import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <section className="showcase" id="home">  
        <div className="showcase_container container">
          <h1 className="showcase_title title title-main">404 Error TESTING</h1>
          <h1 className="showcase_title title title-main">Oooops!</h1>
          <h1 className="showcase_title title title-main">That page cannot be found :( </h1>
          <p>Redirecting to the <Link href="/"><a className="homepage-404-style">Homepage</a></Link></p>
        </div>
        <style jsx>{`
        .homepage-404-style {
            color: white;
            text-transform: uppercase;
        }
        `}</style>
      </section>
    )
}