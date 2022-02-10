import React from "react";

import styles from "./main.module.css";

import { addToCart } from "/redux/cart.slice.js";
import { useDispatch } from "react-redux";
import products from "./products.json";

import WhiteCart from "./shoppingWCart.jsx";
const ShopPage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.companyBrand}>Sneaker Company</div>
      <ul className={styles.grid}>
        {products.map((item) => {
          const { id, title, image, description, price } = item;
          return (
            <li key={id} className={styles.card}>
              <h1 className={styles.title}>{title}</h1>
              <h2 className={styles.description}>{description}</h2>
              <div className={styles.containerAmounts}>
                <h3 className={styles.price}>${price.toFixed(2)}</h3>
                <div className={styles.percentContainer}>
                  <h2 className={styles.percent}>
                    <strong>50%</strong>
                  </h2>
                </div>
              </div>

              <h3 className={styles.originalAmount}>$250.00</h3>

              <button
                id="addToCart"
                className={styles.cartButton}
                onClick={() => dispatch(addToCart({ id, price }))}
              >
                <WhiteCart />
                <h4 className={styles.cartText}> Add to Cart</h4>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopPage;
