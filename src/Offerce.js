import React from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';





const Offers = () => {

  const images = [
    {
      src: image1,
      MainTopic: 'Topic 1',
      MainTopic2: 'This is the Topic 1. It can be more descriptive and long',
      describe:'This is the description 1 that use for topic 1. Inlcuded explanations'
    },
    {
      src: image2,
      MainTopic: 'Topic 2',
      MainTopic2: 'This is the Topic 2. It can be more descriptive and long',
      describe:'This is the description 2 that use for topic 2. Inlcuded explanations'
    },
  
    {
      src: image3,
      MainTopic: 'Topic 3',
      MainTopic2: 'This is the Topic 3. It can be more descriptive and long',
      describe:'This is the description 3 that use for topic 3. Inlcuded explanations'
    },
   
   
  ];

 



  return (
    
    <div className="image-grid" >




      {images.map((image, index) => (
        <div key={index} className="image-container" 
        
        >

      <div className="description-container2" 
          style={{
            backgroundColor:'white',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
            width:'380px', 
            height:'460px',
            display:''}}   
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}>

          <img 
          style={{width:'380px',  marginTop:'-5px', height:'210px'}}
            src={image.src}
            alt={`Img ${index + 1}`}
            
          />
          <div id={`description-${index}`} className="image-description2" 
            style={{color:'#3e3b3e', 
            fontWeight:'bold', 
            justifyContent: 'center',
            display: 'flex',
            fontSize:'12px', 
            fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif', 
            WebkitFontSmoothing: 'antialiased' }}>
            {image.MainTopic}
          </div>
          <br/> 
          <center>
          <div id={`description-${index}`} className="image-description3" 
                      style={{
                      color:'#3e3b3e', 
                      width: '300px',
                      fontWeight:'bold', 
                      display: 'flex',
                      fontSize:'14px', 
                      fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif',  
                      WebkitFontSmoothing: 'antialiased' }}>
                        {image.MainTopic2}
                    
                    </div>
   

          <br/>
          <div id={`description-${index}`} className="image-description3" 
                      style={{
                      color:'#6f6d6f', 
                      width: '300px', 
                      display: 'flex',
                      fontSize:'11.5px', 
                      fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif',  
                      WebkitFontSmoothing: 'antialiased' }}>
                        {image.describe}
                    
                    </div>
                        <br/>
                    <p style={{fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif', fontSize:'15px'}}>With an <span style={{fontWeight: 'bold'}}>exclusive</span> price</p>
                    <br/>
                    <button 
          style={{fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif', color:'#b5883e', borderBlockColor:'#b5883e', border:'1px solid', fontSize:'15px', width:'160px', height:'40px', backgroundColor:'white'}}  
          >View Details</button>

          </center>
       


        </div>

        </div>
      ))}



    </div>
  );
};

export default Offers;

