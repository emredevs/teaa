"use client";
import React, { useState } from "react";
import "./Slider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const images = ["slider1.png", "slider2.png", "slider3.png"];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prevImage}>
        <ArrowBackIosNewIcon />
      </button>
      <img
        src={`/${images[currentImageIndex]}`}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button onClick={nextImage}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Slider;
