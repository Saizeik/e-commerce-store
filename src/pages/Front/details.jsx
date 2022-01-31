import React, { useState, createContext, useContext, useEffect } from "react";
import { addToCart } from "/redux/cart.slice.js";
import { useDispatch } from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./main.module.css";
import products from "./products.json"

function ProductInfo() {
  const [itemCount, setItemCount] = React.useState(1);

  const priceOfItem = 125;

  const totals = itemCount * priceOfItem;

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.percentContainer}>
        <h2 className={styles.percent}>50%</h2>
      </div>

      <h3 className={styles.originalAmount}>$250.00</h3>

      <div className={styles.addSubContainer}>
        <div style={{ display: "block", padding: 30 }}>
          
            
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0));
                  }}
                >
                  {" "}
                  <i className={styles.removeIcon}>
                    <RemoveIcon fontSize="small" />
                  </i>
                </Button>
                <div className={styles.badgeContainer}>
                  <Badge
                    color="default"
                    className={styles.itemCount}
                    badgeContent={itemCount}
                  >
                    {" "}
                  </Badge>
                </div>

                <Button
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                  
              
                >
                  {" "}
                  <i className={styles.addIcon}>
                    <AddIcon fontSize="small" />
                  </i>
                </Button>
              </ButtonGroup>
            
          
        </div>
        <div className={styles.cart}>
          <li>
            <strong>Items:</strong> {itemCount}
          </li>
          <li>
            <strong>Total:</strong> ${totals}
          </li>
        </div>
      </div>
    </>
  );
}
export default ProductInfo;
