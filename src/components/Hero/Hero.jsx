import React, { useState } from "react";
import style from "./Hero.module.css";
import Button from "../button/Button";
import { IoIosPlay } from "react-icons/io";
import CustomCorusel from "../corusel/CustomCorusel"; 
import Navigation from "../navigation/Navigation";
import bg1 from "../../static/bg1.jpg";
import bg2 from "../../static/bg2.jpg";
import bg3 from "../../static/bg3.jpg";
import bg4 from "../../static/bg4.jpg";
import bg5 from "../../static/bg5.jpg";
import bg6 from "../../static/bg6.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const backgroundImageUrls = [bg1, bg2, bg3, bg4, bg5, bg6]; 
  const descriptions = [
    "Superheroes are extraordinary beings who use their incredible abilities to protect the world from various threats. They are symbols of hope and justice.",
    "In times of crisis, superheroes rise to the occasion, showcasing bravery and strength beyond imagination. Their stories inspire us to be better.",
    "Superheroes often lead double lives, balancing their heroic duties with personal challenges. Their perseverance and dedication make them true champions.",
    "With great power comes great responsibility. Superheroes understand this and dedicate their lives to safeguarding humanity from evil.",
    "The journey of a superhero is filled with trials and triumphs, making them relatable and inspiring figures in our lives.",
    "Superheroes remind us that anyone can be a hero, as long as they have the courage to stand up for what is right."
  ];

  return (
    <>
    <div
      className={style.home}
      style={{
        backgroundImage: `url(${backgroundImageUrls[currentSlide]})`,
        backgroundSize: "cover",
        width: "98.6vw",
        height: "100vh",
      }}
      >
      <Navigation/>
      
      <div className={style.banner}>
        <h1 className={style.header}>Spider man No Way Home</h1>
        <p className={style.description}>{descriptions[currentSlide]}</p>
        <div className={style.controls}>
          <Button title="Watch trailer" variant="secondary" />
          <Button title="Watch now" variant="primary" icon={<IoIosPlay />} />
        </div>
      </div>
      <CustomCorusel
        images={backgroundImageUrls}
        onSlideChange={handleSlideChange}
      />
    </div>
    </>
  );
};

export default Hero;