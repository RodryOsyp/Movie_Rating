import React, { useState } from "react";
import styles from "./Corusel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../static/1.jpg"
import logo2 from "../../static/2.jpg"
import logo3 from "../../static/3.jpg"
import logo4 from "../../static/4.jpg"
import logo5 from "../../static/5.jpg"
import logo6 from "../../static/6.jpg"

const CustomCorusel = () => {
  const [currentSlide, setCurrentSlide] = useState(3);
  const images = [logo1, logo2, logo3, logo4, logo5, logo6];

  const handleBeforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };
  console.log(currentSlide);
  console.log(images.length );
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className={styles.carousel}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        beforeChange={handleBeforeChange}
      >
        
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${currentSlide === index ? styles.center : ''}`}
          >
            <img src={image} alt={`Slide ${currentSlide + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCorusel;
