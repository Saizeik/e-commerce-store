import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";
import Cart from "./shoppingCart.jsx";
import avatar from "./image-avatar.png";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  return (
    <nav
      class={`${styles.navbar}navbar navbar-expand-lg navbar-light bg-light`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          sneakers
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Collections <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Men
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Women
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Contact
            </a>
          </li>
          
          <Cart />
          <div className={styles.avatar}>
            <Image src={avatar} />
          </div>
          <div class={styles.border}></div>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
