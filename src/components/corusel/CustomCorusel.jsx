import React, { useState } from "react";
import styles from "./Corusel.module.css";
import Slider from "react-slick";
import img1 from "../../static/1.jpg";
import img2 from "../../static/2.jpg";
import img3 from "../../static/3.jpg";
import img4 from "../../static/4.jpg";
import img5 from "../../static/5.jpg";
import img6 from "../../static/6.jpg";

const CustomCorusel = ({ onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    nextArrow: <div>Next</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      onSlideChange(newIndex);
    },
  };
  const getCentralSlideIndex = () => {
    return (currentSlide + 2) % 6;
  };

  const images = [img1, img2, img3, img4, img5, img6];
  console.log("env:",import.meta.env.VITE_API);
  return (
    <Slider {...settings} className={styles.slide}>
      {images.map((img, index) => (
        <div key={index} className={styles.slideItem}>
          <h3>
            <img
              src={img}
              alt={`img${index + 1}`}
              className={getCentralSlideIndex() === index ? styles.active : styles.inactive} 
            />
          </h3>
        </div>
      ))}
    </Slider>
  );
};

export default CustomCorusel;
