import React from "react";
import minusIcon from "./icon-minus.svg";

import styles from "./main.module.css";

class Minus extends React.Component {
  render() {
    return (
      <>
        <li className={styles.minusIcon} img src={minusIcon}>
          <a className="nav-link disabled" href="#"></a>

          <svg
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
          </svg>
        </li>
      </>
    );
  }
}
export default Minus;
