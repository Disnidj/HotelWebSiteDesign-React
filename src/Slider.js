import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image1,
      topic1: '- 𝓐𝓡𝓒𝓐𝓓𝓘𝓐 -',
      description: 'A Place To Reset You Hectic Life',
      sublink:'Find your place',
    },
    {
      image: image2,
      topic: '𝓕𝓞𝓞𝓓 & 𝓑𝓔𝓥𝓔𝓡𝓐𝓖𝓞𝓤𝓢',
      description: 'You Can Create Your Own Menu',
    },
    {
      image: image3,
      topic: '𝒟𝐼𝒩𝒩𝐼𝒩𝒢',
      description: 'A Better Place Than Home',
      sublink:'Eat with us',
    },
    {
      image: image4,
      topic: '𝓐𝓒𝓒𝓞𝓜𝓐𝓓𝓐𝓣𝓘𝓞𝓝𝓢',
      description: 'With Cosy Pillows & Fresh Air',
    },
    {
      image: image5,
      topic: '𝓟𝓞𝓞𝓛 𝓐𝓡𝓔𝓐',
      description: 'The Best Place To Relax For A Sun Bath',
      sublink:'Pool types',
    },
    
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === slides.length - 1) {
          // When on the last slide, directly transition to the first slide without showing the intermediate ones
          return 0;
        } else {
          return prevSlide + 1; // Go to the next slide otherwise
        }
      });
    }, 7000); // Change slide every 7 seconds (7000ms)
  
    return () => clearInterval(interval);
  }, [slides.length, setCurrentSlide]);

 
  

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === slides.length - 1) {
        return 0;
      } else {
        return prevSlide + 1;
      }
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };





  return (
    <div className="slider-container">
      
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
        
            <div key={index} className="slide">
            <img style={{ filter: 'brightness(65%)' }} src={slide.image} alt={`Slide ${index}`} />
            <div className="slide-content">
              <h3 style={{fontSize:'50px'}}>{slide.topic1}</h3>
              <h3 style={{fontSize:'30px'}}>{slide.topic}</h3>
              <p>{slide.description}</p>
              {/* <p className="specific-margin">{slide.sublink}</p> */}

              
              
             
              
            </div>
            <div className="slider-arrow slider-arrow-left" onClick={handlePrevSlide}>
            &nbsp;&nbsp;<i className="fa-solid fa-chevron-left"></i>
            </div>
               
            <div className="slider-arrow slider-arrow-right" onClick={handleNextSlide}>
            &nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i>
            </div>

            </div>
           
        ))}


        
      </div>
      
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>

      


    </div>
  );
};

export default Slider;
