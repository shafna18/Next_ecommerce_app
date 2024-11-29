'use client'
import React from "react";
import styles from './cart.module.css'
 
function Cart() {
    return ( 
        <div className={styles.cart}>
            <h1>Cart</h1>
            <p>Your cart is empty</p>
        </div>
     );
}

export default Cart;