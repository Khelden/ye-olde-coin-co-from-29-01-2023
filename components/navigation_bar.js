import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import Cart  from './Cart'
import { useStateContext } from '../context/StateContext'

const Navigation = () => {
    const { showCart, setShowCart, totalQuantities} = useStateContext();
    return (
        <header className="header">
            <nav className="navbar container">
                <Link href="/" >
                    <a className="navbar_logo"><img className="navbar_logo-image" src="/images/logo_image.png"/></a>
                </Link>
                <div className="navbar_menu">
                    <ul className="navbar_list">
                        <li className="navbar_list-item">
                            <Link href="/"><a className="navbar_list-link">Home</a></Link>
                        </li>
                        <li className="navbar_list-item">
                            <Link href="/"><a className="navbar_list-link">Coins</a></Link>
                        </li>
                        <li className="navbar_list-item">
                            <Link href="/"><a className="navbar_list-link">Services</a></Link>
                        </li>
                        <li className="navbar_list-item">
                            <Link href="/about"><a className="navbar_list-link">About</a></Link>
                        </li>
                        <li className="navbar_list-item">
                            <Link href="/items_for_sale"><a className="navbar_list-link">Items for Sale</a></Link>
                        </li>
                    </ul>
                </div>
                {/*Regarding the below, it has been commented out to remove the shopping cart functionality, 
                which is not used in this build. */}
                {/*
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                            <AiOutlineShoppingCart />
                            <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showCart && <Cart />}
                {/*<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                            <AiOutlineShoppingCart />
                            <span className="cart-item-qty">{totalQuantities}</span>
                        </button>
    {showCart && <Cart />}*/}
                <div className="navbar_btn-group">
                    <Link href="mailto:oldcoins@senet.com.au"><a className="btn btn-text btn-transparent">Contact me</a></Link>
                    <button type="button" className="btn btn-action" id="menu-toggler">
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3333 0.999999L0.999918 1" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M17.3333 6.83333L0.999916 6.83333" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M10.3333 12.6667L0.999918 12.6667" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
      );
}
 
export default Navigation;