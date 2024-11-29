"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productservices } from "../../Services/Product.services";
import styles from "./detail.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productDetails = await productservices.getproductbyid(Number(id));
        setProduct(productDetails);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.infoContainer}>
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
        <button className={styles.button}>ADD TO CART</button>
      </div>
    </div>
  );
}
