import React from "react";
import styles from "./Corusel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../static/Rectangle3.png"
const CustomCorusel = () => {
  console.log(logo);
  
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
            items: 3,
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
      >
        <div><img src="../../static/Rectangle3.png" alt="" /></div>
        {/* <div><img src="../src/assets/Rectangle3.png" alt="" /></div>
        <div><img src="../src/assets/Rectangle5.png" alt="" /></div>
        <div><img src="../src/assets/Rectangle8.png" alt="" /></div>
        <div><img src="../src/assets/Rectangle9.png" alt="" /></div> */}
        <div><img src="" alt="" /></div>
      </Carousel>
    </div>
  );
};

export default CustomCorusel;
