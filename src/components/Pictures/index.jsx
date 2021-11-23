import React, { Component, useState } from "react";


import styles from "./custom.module.css";

import Image from "next/image";

import shoes from "./image-product-1.jpg";
import shoes2 from "./image-product-2.jpg";
import shoes3 from "./image-product-3.jpg";
import shoes4 from "./image-product-4.jpg";

const data = [
  { image: shoes },
  { image: shoes2 },
  { image: shoes3 },
  { image: shoes4 },
];


function Gallery (){
  return (
    <>
      <div
        id="carousel-thumb"
        className="carousel slide carousel-fade carousel-thumbnails"
        data-ride="carousel"
      >
        <div className={styles.carouselInner}>
          <div
            className="carousel-item active"
            id="active"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
          
            <a
              href="./image-product-1.jpg"
              className={`${styles.dImage}d-block w-100`}
              alt="First slide"
              width={445}
              height={445}
              data-toggle="lightbox"
            >
              <Image src={shoes} />
            </a>

            
          </div>
          <div className="carousel-item">
            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
              <Image
                src={shoes2}
                className={`${styles.dImage}d-block w-100`}
                alt="Second slide"
                width={445}
                height={445}
                onClick={() => {
                  console.log("hello");
                }}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
              <Image
                src={shoes3}
                className={`${styles.dImage}d-block w-100`}
                alt="Third slide"
                width={445}
                height={445}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
              <Image
                src={shoes4}
                className={`${styles.dImage}d-block w-100`}
                alt="Fourth slide"
                width={445}
                height={445}
              />
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-thumb"
            className={`${styles.dImage}d-block w-100`}
            data-slide-to="0"
            className="active"
          >
            <div className={styles.shoes}>
              <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                <Image
                  src={shoes}
                  objectFit="cover"
                  className={`${styles.dImage}d-block w-100`}
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </li>

          <li data-target="#carousel-thumb" data-slide-to="1">
            <div className={styles.shoes2}>
              <div
                className={shoes2}
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes2}
                  className={`${styles.dImage}d-block w-100`}
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </li>
          <li data-target="#carousel-thumb" data-slide-to="2">
            <div className={styles.shoes3}>
              <div
                className={shoes3}
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes3}
                  className={`${styles.dImage}d-block w-100`}
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </li>
          <li data-target="#carousel-thumb" data-slide-to="3">
            <div className={styles.shoes4}>
              <div
                className={shoes4}
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes4}
                  className={`${styles.dImage}d-block w-100`}
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </li>
        </ol>
       
      </div>
    </>
  );
}

export default Gallery;
