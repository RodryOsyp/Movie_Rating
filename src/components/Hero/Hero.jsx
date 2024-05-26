import React, { useState } from "react";
import style from "./Hero.module.css";
import Button from "../button/Button";
import { IoIosPlay } from "react-icons/io";
import CustomCorusel from "../corusel/CustomCorusel";
import Navigation from "../navigation/Navigation";

const Hero = () => {
  const loremText =
    "Hell0!!! Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse ";

  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMoreClick = () => {
    setIsExpanded((prevExpanded) => !prevExpanded); // Инвертируем значение isExpanded
  };
  const visibleText = 150;
  return (
    <>
      <Navigation/>
    <div className={style.banner}>
      <h1 className={style.header}>Spider man No Way Home</h1>
      <span className={style.lorem}>
        {isExpanded
          ? loremText
          : `${loremText.slice(0, visibleText)}${
              loremText.length > visibleText ? "..." : ""
            }`}
        {loremText.length > visibleText && (
          <span className={style.see} onClick={handleSeeMoreClick}>
            {isExpanded ? "See less" : "See more"}
          </span>
        )}
      </span>
      <div className={style.controls}>
      <Button title="Whatch trailer" variant="secondary" />
      <Button title="Whatch now" variant="primary" icon={<IoIosPlay />} />
      </div>
    </div>
      <div><CustomCorusel/></div>
      </>
  );
};

export default Hero;
