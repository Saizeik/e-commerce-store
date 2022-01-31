import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    

        <footer class="py-3 my-4">
          
      
        <div class={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          Coded by <a href="#">Nathan Scott Walker</a>
        
          <p class="text-center text-muted">
            {`Nathan Walker Productions Inc | All Rights Reserved ©${new Date().getFullYear()}`}
          </p>
          </div>
        </footer>
      
    
  );
};
export default Footer;
