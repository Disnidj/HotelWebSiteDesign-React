import React from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

import './Experience.css';



const Experience = () => {

  const images = [
    {
      src: image1,
      description: 'Description for Image 1',
    },
    {
      src: image2,
      description: 'Description for Image 2',
    },
  
    {
      src: image3,
      description: 'Description for Image 3',
    },
    {
      src: image4,
      description: 'Description for Image 4',
    },
  
    {
      src: image5,
      description: 'Description for Image 5',
    },
    {
      src: image6,
      description: 'Description for Image 6',
    },
   
  ];

  const handleHover = (index) => {
    const description = document.getElementById(`description-${index}`);
    description.classList.toggle('hovered');
  };



  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img style={{filter: 'brightness(65%)'}}
            src={image.src}
            alt={`Img ${index + 1}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(index)}
          />
          <div id={`description-${index}`} className="image-description">
            {image.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
