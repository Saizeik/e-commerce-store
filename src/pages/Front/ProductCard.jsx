import React from "react";


import styles from "./main.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
      <>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.cart}
      ><div class={styles.cartText}>Add to Cart</div>
       
      </button>
    
    </>
  );
};
      


export default ProductCard;
