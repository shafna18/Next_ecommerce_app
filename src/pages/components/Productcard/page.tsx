"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import style from "./productcard.module.css";

export default function Productcard(props: any) {
  const [selectedproduct, setSelectedProduct] = useState([]);
  const prod = props.product;

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setSelectedProduct(cartItems);
  }, []);

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push(prod);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setSelectedProduct(cartItems);
  };

  const router = useRouter();

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <>
      <div className={style.body}>
        <div>
          <Link
            href={`/Products/${prod.id}/page`} 
            style={{ color: "black", textDecorationLine: "none" }}
          >
            <div>
              <div className={style.image}>
                <img src={prod.image} height={100} />
              </div>
              <div className={style.title}>{prod.title}</div>
              <div className={style.category}>{prod.category}</div>
              <div className={style.price}>{formatPrice(prod.price)}</div>
            </div>
          </Link>
        </div>
        <button onClick={addToCart} className={style.cart}>
          Add to cart
        </button>
      </div>
    </>
  );
}