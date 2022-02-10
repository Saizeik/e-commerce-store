import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./custom.module.css";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

import shoes from "./image-product-1.jpg";
import shoes2 from "./image-product-2.jpg";
import shoes3 from "./image-product-3.jpg";
import shoes4 from "./image-product-4.jpg";

function Gallery() {
  const options = {
    caption: { showCaption: false },
    settings: {},
    thumbnails: {
      thumbnailsSize: ["88px", "88px"],
      thumbnailsBorderRadius: ["10px"],
      thumbnailsContainerPadding: "0",
      thumbnailsGap: "0 1px",
    },
    buttons: {},
  };

  return (
    <>
      <div className={styles.innerContainer}>
        <SRLWrapper options={options}>
          <Carousel wrap="true" fade className={styles.carouselContainer}>
            <Carousel.Item id="carousel-thumb">
              <Image
                src={shoes}
                a
                href="./image-product-1.jpg"
                className="d-block w-100"
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
                className="d-block w-100"
                alt="Second slide"
                width={445}
                height={445}
              ></Image>
            </Carousel.Item>

            <Carousel.Item id="carousel-thumb">
              <Image
                src={shoes3}
                className="d-block w-100"
                alt="Third slide"
                width={445}
                height={445}
              />
            </Carousel.Item>

            <Carousel.Item id="carousel-thumb">
              <Image
                src={shoes4}
                className="d-block w-100"
                alt="Fourth slide"
                width={445}
                height={445}
              />
            </Carousel.Item>
          </Carousel>
        </SRLWrapper>
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
