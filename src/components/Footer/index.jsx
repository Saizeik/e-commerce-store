import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          {" "}Coded by <a href="#">Nathan Scott Walker</a>
        </div>
     

      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Collections
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Men
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Women
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">
          © 2021 Nathan Walker Productions Inc
        </p>
      </footer>
      </div>
    </>
  );
};
export default Footer;
