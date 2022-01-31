import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./custom.module.css";

import Image from "next/image";

import shoes from "./image-product-1.jpg";
import shoes2 from "./image-product-2.jpg";
import shoes3 from "./image-product-3.jpg";
import shoes4 from "./image-product-4.jpg";

function Gallery() {
  return (
    <>
      <div className={styles.innerContainer}>
        <Carousel wrap="true" fade className={styles.carouselContainer}>
          <Carousel.Item id="carousel-thumb">
            <Image
              src={shoes}
              a
              href="./image-product-1.jpg"
              className={`${styles.dImage}d-block w-100`}
              alt="First slide"
              width={445}
              height={445}
              data-bs-toggle="lightbox"
            ></Image>
          </Carousel.Item>

          <Carousel.Item id="carousel-thumb">
            <Image
              src={shoes2}
              a
              href="./image-product-2.jpg"
              className={`${styles.dImage}d-block w-100`}
              div
              style={{ borderRadius: "15px", overflow: "hidden" }}
              alt="Second slide"
              width={445}
              height={445}
            ></Image>
          </Carousel.Item>

          <Carousel.Item id="carousel-thumb">
            <Image
              src={shoes3}
              className="d-block w-100"
              style={{ borderRadius: "15px", overflow: "hidden" }}
              alt="Third slide"
              width={445}
              height={445}
            />
          </Carousel.Item>

          <Carousel.Item id="carousel-thumb">
            <Image
              src={shoes4}
              className="d-block w-100"
              style={{ borderRadius: "15px", overflow: "hidden" }}
              alt="Fourth slide"
              width={445}
              height={445}
            />
          </Carousel.Item>
        </Carousel>
        <div className={styles.thumbnailContainer}>
          <div className="carousel-indicators">
            <div className={styles.shoes}>
              <div
                className="carousel item"
                data-target="#carousel-thumb"
                data-bs-slide-to="0"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes}
                  className="d-block w-100"
                  width={88}
                  height={88}
                />
              </div>
            </div>
            <div className={styles.shoes2}>
              <div
                className="carousel item"
                data-target="#carousel-thumb"
                data-bs-slide-to="1"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes2}
                  className="d-block w-100"
                  width={88}
                  height={88}
                />
              </div>
            </div>
            <div className={styles.shoes3}>
              <div
                className="carousel item"
                data-target="#carousel-thumb"
                data-bs-slide-to="2"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes3}
                  className="d-block w-100"
                  width={88}
                  height={88}
                />
              </div>
            </div>

            <div className={styles.shoes4}>
              <div
                className="carousel item"
                data-target="#carousel-thumb"
                data-bs-slide-to="3"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={shoes4}
                  className="d-block w-100"
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
