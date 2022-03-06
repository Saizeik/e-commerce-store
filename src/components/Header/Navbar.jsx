import React from "react";
import Link from "next/link";

import styles from "./header.module.css";
import Badge from "@material-ui/core/Badge";
import CartModal from "./cartModal.js";
import avatar from "./image-avatar.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <button
          className="navbar-toggler border-3 px-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-label="offcanvasExample"
          cursor="pointer"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={styles.sneakers}>
          <a className="navbar-brand text-black" href="#">
            <strong>sneakers</strong>
          </a>
        </div>
        <div className={styles.cartAndAvatarContainer}>
          <Link href="/cart">
            <Badge className={styles.badgeIcon}>
              <p id="cartCount" className={styles.cartCount}>
                {" "}
                {getItemsCount()}
              </p>
            </Badge>
          </Link>

          <CartModal />

          <div className={styles.avatar}>
            <Image src={avatar} alt="avatar profile picture" />
          </div>
        </div>
        <div
          className="offcanvas offcanvas-start-lg bg-white"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-body p-lg-0">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
            <ul className="navbar-nav">
              <li className={`${styles.collections}nav-item active`}>
                <a className="nav-link" aria-current="page" href="#">
                  Collections <span className="sr-only"></span>
                </a>
              </li>
              <li className={`${styles.men}nav-item`}>
                <a className="nav-link" aria-current="page" href="#">
                  Men
                </a>
              </li>
              <li className={`${styles.women}nav-item`}>
                <a className="nav-link" aria-current="page" disabled href="#">
                  Women
                </a>
              </li>
              <li className={`${styles.about}nav-item`}>
                <a className="nav-link" aria-current="page" disabled href="#">
                  About
                </a>
              </li>
              <li className={`${styles.contact}nav-item`}>
                <a className="nav-link" aria-current="page" disabled href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.border}></div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
