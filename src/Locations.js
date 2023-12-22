import React, { useState, useEffect } from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import './App.css';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedOption, setSelectedOption] = useState('Image 1');

    // Define Topic for each image
    const topic = {
      'Image 1': 'The Bell',
      'Image 2': 'The Pie',
      
    };

  // Define descriptions for each image
  const descriptions = {
    'Image 1': 'This is the Description  area for Image 1. The shortest description you can find here or else, you can click on the below button to explore more about this image. Hope you like the description. Have a good day !',
    'Image 2': 'This is the Description  area for Image 2. The shortest description you can find here or else, you can click on the below button to explore more about this image. Hope you like the description. Have a good day !',

    
  };

  useEffect(() => {
    handleImageChange(selectedOption);
  }, [selectedOption]);

  const handleImageChange = (imageName) => {
    switch (imageName) {
      case 'Image 1':
        setSelectedImage(image1);
        break;
      case 'Image 2':
        setSelectedImage(image2);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

  const handleMoreDescription = () => {
    
  };

  return (
    <div className="image-gallery-container">
      
      <center><h1 style={{color:'#aa7d2a', fontFamily: 'BodoniStd-BookItalic, serif', fontSize:'60px', fontStyle:'italic'}}> Our Destinations</h1></center>

      <center>
      <div className="dropdownLocations" >
        <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption} 
        style={{width:'550px',
         height:'50px', 
         color:'#c8a05f', 
         fontStyle:'italic',
         fontFamily: 'BodoniStd-BookItalic, serif',
         fontSize:'20px',
         border: '0.7px solid #996f29'}}>
          <option value="Image 1" style={{hover: 'none'}} >Test Image One - 1</option>
          <option value="Image 2">Test Image Two - 2</option>
         
        </select>
      </div>
      </center>
     <br/>
     <center>
     <div className="image-container" style={{position: 'relative'}}>
        {selectedImage && <img style={{width:'700px', height:'600px', position: 'relative'}} src={selectedImage} alt="Selected" />}
      </div>
     </center>

     
      <div className="description-container" 
      style={{
        position: 'absolute',
        backgroundColor:'white',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        width:'350px', 
        height:'550px',
        marginTop:'-510px',
        marginLeft:'880px',
        display:''}}>
          <br/>
         <h2 style={{fontFamily: 'BodoniStd-BookItalic, serif',fontStyle:'italic', fontWeight:'bold', color:'#b5883e' , marginLeft:'40px'}}>{topic[selectedOption]}</h2>
         <br/><br/>

        <div className="description" style={{fontFamily: 'UniversLT-Light, serif' , marginLeft:'40px', fontSize:'20px', width:'240px'}}>
        
          <p>
            {/* Display description based on the selected image */}
            {descriptions[selectedOption]}
          </p>
          <br/>
          <button 
          style={{fontFamily: 'BodoniStd-BookItalic, serif',fontStyle:'italic', backgroundColor:'#12145b', border:'none', color:'white', width:'180px', height:'50px'}}  
          onClick={handleMoreDescription}>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
