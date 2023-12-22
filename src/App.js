import './App.css';
import logo from './images/logo.png';
import Slider from './Slider';
import DateRangePicker from './DatePicker'
import Locations  from './Locations';
import Experiences from './Experiences'
import Offers from './Offerce';
import Footer from './Footer';


import React, { useState } from 'react';


const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        ABOUT &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
        <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
          <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-65px'}}>
            <tr>
              <td>
                <ul>
                <br/>
                <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
                <br/>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
                </ul>
              </td>
              <span/><span/><span/>
              <td>
              <ul>
              <br/>
              <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
              <br/>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
              </ul>
              </td>
            
            </tr>
            
          </div>

          
        </div>
      )}
    </div>
  );
};


const ROOMSandSUITES = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      ROOMS & SUITES &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
        <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
        <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-180px'}}>
          <tr>
            <td>
              <ul>
              <br/>
              <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
              <br/>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
              </ul>
            </td>
            <span/><span/><span/>
            <td>
            <ul>
            <br/>
            <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
            <br/>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
            </ul>
            </td>
          
          </tr>
          
        </div>

        
      </div>
      )}
    </div>
  );
};



const DINING = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      DINING &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
       <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
          <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-390px'}}>
            <tr>
              <td>
                <ul>
                <br/>
                <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
                <br/>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
                <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
                </ul>
              </td>
              <span/><span/><span/>
              <td>
              <ul>
              <br/>
              <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
              <br/>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
              </ul>
              </td>
            
            </tr>
            
          </div>

          
        </div>
      )}
    </div>
  );
};

const EXPERIENCE = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      EXPERIENCE &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
        <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
        <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-495px'}}>
          <tr>
            <td>
              <ul>
              <br/>
              <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
              <br/>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
              <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
              </ul>
            </td>
            <span/><span/><span/>
            <td>
            <ul>
            <br/>
            <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
            <br/>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
            <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
            </ul>
            </td>
          
          </tr>
          
        </div>

        
      </div>
      )}
    </div>
  );
};

const EVENTS = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      EVENTS &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
       <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
       <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-650px'}}>
         <tr>
           <td>
             <ul>
             <br/>
             <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
             <br/>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
             </ul>
           </td>
           <span/><span/><span/>
           <td>
           <ul>
           <br/>
           <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
           <br/>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
           </ul>
           </td>
         
         </tr>
         
       </div>

       
     </div>
      )}
    </div>
  );
};
const MORE = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <a href="/link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      MORE &nbsp;<i className="fa-solid fa-chevron-down"></i>
      </a>
      {isHovered && (
       <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0 }}>
          
       <div style={{ color: 'black', backgroundColor: 'white', position: 'absolute', zIndex: '1000', width: '100vw', marginLeft:'-1000px'}}>
         <tr>
           <td>
             <ul>
             <br/>
             <ul style={{fontWeight:'bold', fontSize:'20px', color:'#c49748'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕺𝖓𝖊</ul>
             <br/>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
             <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
             </ul>
           </td>
           <span/><span/><span/>
           <td>
           <ul>
           <br/>
           <ul style={{fontWeight:'bold', fontSize:'20px', color:'#213f70'}}>𝕸𝖆𝖎𝖓 𝕿𝖔𝖕𝖎𝖈 𝕿𝖜𝖔</ul>
           <br/>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   1</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   2</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   3</li>
           <li style={{marginLeft:'30px', listStyleType: 'none', color:'#4a4a65'}}>𝘚𝘶𝘣 𝘵𝘰𝘱𝘪𝘤   4</li>
           </ul>
           </td>
         
         </tr>
         
       </div>

       
     </div>
      )}
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <div className='container-logo' >
        
        <img className='logo' src={logo} alt="Logo"  />
        <h3 className='Logo-name' >ARCADIA</h3>

        <div className='container-head-top'>
        <div className='Top-links'>
        <a href="/l"> <i className="fa-regular fa-user"></i> &nbsp;&nbsp; Sign In</a>
        <span className='separator'></span>
        <a href="/l">Join Now</a>
        <span className='separator'></span>
        <a href="/l">Find Reservations</a>
        <span className='separator'></span>
        <a href="/l"> <i className="fas fa-globe">&nbsp;&nbsp;</i>English</a>
        <span className='separator'></span>
        <a href="/l">SGD</a>
        <span className='separator'></span>
        <a href="/l"><i className="fa-solid fa-mobile-screen"></i></a>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
       
        
      </div>
      
      <div className="navbar" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <a href="/link">ABOUT &nbsp;<i className="fa-solid fa-chevron-down"></i></a> */}
      <About />
      <ROOMSandSUITES />
      <DINING />
      <EXPERIENCE />
      <EVENTS />
      <a href="/link">GALLERY</a>
      <a href="/link">OFFERS</a>
      <MORE />
      
     
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#link" className="split">   
      <button className='Nav-button'>FIND A HOTEL </button>
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
     
    </div>

    <div className='Slidersection'>
    <Slider/>
    
  
    </div>
    <br/><br/><br/>
    <div className='date-pick' > <DateRangePicker /></div>
    <br/><br/><br/>
    <div className='Locationsection'><Locations /></div>
    
    <br/><br/><br/><br/><br/>

    <div className='Experiences' style={{marginLeft:'60px'}}>
      <h1 style={{color:'#374f77', fontFamily: 'BodoniStd-BookItalic, serif',fontStyle:'bold', fontSize:'60px'}}>...Wonderful Stays Await...</h1>
      <p style={{ fontSize:'22px',fontFamily: 'BodoniStd-BookItalic, serif', color:'#525255'}}><span></span>Including best offers you can ever imagine</p>

    <div className='Experience'><Experiences /></div>

    <br/><br/><br/>
    <center><h1 style={{color:'#aa7d2a', fontFamily: 'BodoniStd-BookItalic, serif', fontSize:'60px', fontStyle:'italic'}}> Offers For You</h1></center>
    <br/>


     <div className='Offers'><Offers /></div>
    </div>

    <div className='Footer-section'><Footer /></div>
 
  </div>
    
  );
}

export default App;
