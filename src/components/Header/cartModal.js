import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Image from "next/image";
import TrashCan from "./trash.jsx";
import Shoes from "/src/components/Pictures/image-product-1-thumbnail.jpg";
import products from "/src/pages/Front/products.json";
// Importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "/redux/cart.slice";

import Cart from "./shoppingCart.jsx";

import styles from "./header.module.css";

const CartModal = () => {
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`);
  const { id, title, image, description, price } = products;

  async function initiateCheckout({ lineItems } = {}) {
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        {
          price: `price_1JyjIsIoOTtZbogrPOgxMuVB`,
          quantity: 1,
        },
      ],

      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });

    console.log("Checkout!");
  }

  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.map((item) => Number(item.quantity) * Number(item.price), 0);
  };

  return (
    <>
      <div className={styles.shoppingCart}>
        <button
          className={styles.btn}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          data-bs-keyboard="true"
          data-bs-backdrop="false"
        >
          <Cart />
        </button>
      </div>

      <div
        id="myModal"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        className="modal fade"
        aria-hidden="true"
        role="dialog"
      >
        <div className={styles.cartModal}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content border-0">
              <h4 className="modal-title">Cart</h4>

              <div className={styles.modalHeaderLine}></div>

              <div className="modal-body">
                {cart.length === 0 ? (
                  <h1 className={styles.h1}>Your Cart is Empty.</h1>
                ) : (
                  <>
                    <div className={styles.header}></div>
                    {cart.map((item) => (
                      <li key={item.price}>
                        <div className={styles.cartContainer}>
                          <div className={styles.image}>
                            <Image
                              src={Shoes}
                              a
                              href="/src/components/Pictures/image-product-1-thumbnail.jpg"
                              height="50"
                              width="50"
                              alt=" white and orange shoes thumbnail"
                            />
                          </div>
                          <p className={styles.product}>
                            {item.product}Fall Limited Edition Sneakers
                          </p>
                          <p className={styles.quantityAndPrice}>
                            $ {item.price} x {item.quantity}{" "}
                          </p>
                          <p className={styles.totalPrice}>
                            {" "}
                            $ {getTotalPrice()}
                          </p>{" "}
                          <button
                            className={styles.trashButton}
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <TrashCan
                              type="button"
                              className={styles.trash}
                            ></TrashCan>
                          </button>
                          <div className={styles.addSubContainer}>
                            <button
                              className={styles.subtractButton}
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                            >
                              {" "}
                              <i className={styles.removeIconModal}>
                                <RemoveIcon fontSize="small" />
                              </i>
                            </button>
                            <button
                              className={styles.additionButton}
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              {" "}
                              <i className={styles.addIconModal}>
                                <AddIcon fontSize="small" />
                              </i>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}

                    <button
                      onClick={() => {
                        initiateCheckout({
                          lineItems: [
                            {
                              price: id,
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                      className={styles.checkOut}
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
