"use client";

import React, { useState, useEffect } from "react";
import { productservices } from "../../Services/Product.services";
import Productcard from "../Productcard/page";
import styles from "./product.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function Productlist() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productservices.getproduct();
      setProducts(productList);
      setFilteredProducts(productList);
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = new Set(selectedCategories);
    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }
    setSelectedCategories(updatedCategories);
    filterProducts(updatedCategories, priceRange);
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = Number(event.target.value);
    setPriceRange(newRange);
    filterProducts(selectedCategories, newRange);
  };

  const filterProducts = (
    categories: Set<string>,
    priceRange: [number, number]
  ) => {
    let filtered = products;

    if (categories.size > 0) {
      filtered = filtered.filter((product) => categories.has(product.category));
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  return (
    
    <div style={{ display: "flex" }}>
      <aside className={styles.sidebar}>
        <h3>Filters</h3>
        <div>
          <h4>Category</h4>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.has(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Price Range</h4>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            style={{ width: "100%" }}
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            style={{ width: "100%" }}
          />
          <p>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </aside>

      <div className={styles["product-list"]}>
      
        {filteredProducts.map((p: Product) => {
          return <Productcard key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
}
