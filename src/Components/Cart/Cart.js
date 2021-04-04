import React, { Component } from 'react'
import cart from './shopping-cart.svg'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <img src={cart} className="img"></img>
        )
    }
}

