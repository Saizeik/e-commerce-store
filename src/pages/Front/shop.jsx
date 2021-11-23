import React from "react";
import styles from "./main.module.css";
import WhiteCart from "./shoppingWCart.jsx";
import Counters from "./counter.jsx";
import products from "/products.json";

const ShopPage = () => {
  console.log("products", products);
  return (
    <>
      <div class={styles.container}>
        <div className={styles.companyBrand}>Sneaker Company</div>
        {products.map((product) => {
          const { id, title, description, price } = product;
          return (
            <>
              <div key={id} className={styles.title}>
                {title}{" "}
              </div>

              <div className={styles.description}>{description}</div>

              <div className={styles.containerAmounts}>
                <h1 className={styles.price}>
                  ${price} {""}
                </h1>

                <div className={styles.percentContainer}>
                  <h2 className={styles.percent}>50%</h2>
                </div>

                <h3 className={styles.originalAmount}>$250.00</h3>
              </div>
            </>
          );
        })}

        <div className={styles.addSubContainer}>
          <Counters />
        </div>
        <button className={styles.cartButton}>
          <div class={styles.cartText}>Add to Cart</div>
          <WhiteCart />
        </button>
      </div>
    </>
  );
};

export default ShopPage;
