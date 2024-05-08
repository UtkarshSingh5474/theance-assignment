import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SuccessStories from "../../assets/SuccessStories.svg";
import "./HomeScreen.css";
import SecondaryCTAButton from "../../components/SecondaryCTAButton/SecondaryCTAButton";
import Footer from "../../components/Footer/Footer";
import FAQAccordionCard from "../../components/FAQAccordionCard/FAQAccordionCard";

const HomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div className="section">
          <div className="vertical-text">
            {/* Text for the first vertical section */}
            <p className="subtext">Success Stories</p>
            <p className="heading">
              Every success journey
              <br />
              we’ve encountered.
            </p>
          </div>
          <div className="two-columns">
            <div className="left-column">
              {/* Image */}
              <img
                src={SuccessStories}
                className="success-img"
                alt="Left Image"
              />
            </div>
            <div
              className="right-column"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Carousel with text and button */}
              {/* Carousel content */}
              <p className="carousel-text">{carouselContent[currentSlide]}</p>
              {/* Navigation dots */}
              <div className="carousel-dots">
                {carouselContent.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>

              <div className="carousel-button">
                <SecondaryCTAButton>Explore More</SecondaryCTAButton>
              </div>
            </div>
          </div>
          <div className="vertical-text">
          <FAQAccordionCard /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const carouselContent = [
  "Enhance fortune 50\ncompany’s insights\nteams research\ncapabilities",
  "Boost Fortune 50 insights teams with advanced tools for sharper research and strategic insights.",
  "Empower Fortune 50 insights teams with cutting-edge methods to drive innovation and growth.",
];

export default HomeScreen;
