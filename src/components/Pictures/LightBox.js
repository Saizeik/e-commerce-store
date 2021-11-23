import React, {useEffect} from "react";
import $ from 'jquery';
import { Lightbox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";
import data from './data.json'; // <--- Importing Sample 


import styles from "./custom.module.css";

import shoes from "./image-product-1.jpg";
import shoes2 from "./image-product-2.jpg";
import shoes3 from "./image-product-3.jpg";
import shoes4 from "./image-product-4.jpg";
import Image from "next/image";


const Box = () => {
	// State
	const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};
  useEffect(() => {
    alert('Finished loading');
  }, []);

  if (typeof window === 'object') {
    // Check if document is finally loaded
       document.addEventListener("DOMContentLoaded", function () {
           alert('Finished loading')
         });
         $(document).on('click', '[data-toggle="lightbox"]', function(event) {
          event.preventDefault();
          $(this).Lightbox();
      });
      }
      
  
	return (
		<div>
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

                <a
                  href="./image-product-2.jpg"
                  data-toggle="lightbox"
                >
                  <Image src={shoes2} />
                </a>

                <a
                  href="./image-product-3.jpg"
                  data-toggle="lightbox"
                >
                  <Image src={shoes3} />
                </a>

                <a
                  href="./image-product-4.jpg"
                  data-toggle="lightbox"
                >
                  <Image src={shoes4} />
                </a>
              





			// data should be an array of object
			{data.map((item, index) => (
			<>
				<img
					key={item.id}
					src={item.image}
					alt={item.title}
					style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
					onClick={() => {
					lightBoxHandler(true, index);
					}}
				/>
			</>
			))}
			
			//Component
			<Lightbox
				state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>
      
		</div>
	);
}

export default Box;
