import React from 'react';
import image5 from './images/image5.jpg';
import footerup from './images/footerup.png'
import footer4 from './images/footer4.png'

import './App.css'


const Footer = () => {
 

  return (
    <div className='Footer-class'>
         <br/>

        <div className="Footer" style={{
        backgroundImage: `url(${image5})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '300px', 
        width: '100%', 
    }}>
       
        <img src={footerup} alt="" 
            style={{width:'100%', marginTop:'-100px', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
                
                />
    
    <div>
        <table>
            <tr>
                <td style={{width:'500px'}}>
                    <ul style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝑭𝒐𝒐𝒕𝒆𝒓 𝒕𝒆𝒙𝒕 𝒐𝒏𝒆 - 𝒉𝒆𝒂𝒅𝒆𝒓 
                        <li style={{color:'#8f8c8f', fontSize:'15px', listStyleType:'none', lineHeight:'80px'}}>Cinnamon Hotels & Resorts</li>
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none'}}>John Keells Group</li>
                    </ul>
                </td>

                <td style={{width:'500px'}}>
                    <ul  style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝑭𝒐𝒐𝒕𝒆𝒓 𝒕𝒆𝒙𝒕 𝒕𝒘𝒐 - 𝒉𝒆𝒂𝒅𝒆𝒓 
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none', lineHeight:'80px'}}>Cinnamon Hotels & Resorts</li>
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none'}}>John Keells Group</li>
                    </ul>
                </td>

                <td style={{width:'500px'}}>
                    <ul  style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝑭𝒐𝒐𝒕𝒆𝒓 𝒕𝒆𝒙𝒕 𝒕𝒉𝒓𝒆𝒆 - 𝒉𝒆𝒂𝒅𝒆𝒓 
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none', lineHeight:'80px'}}>Cinnamon Hotels & Resorts</li>
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none'}}>John Keells Group</li>
                    </ul>
                </td>
            </tr>

            
            <br/><br/>
            <tr>
            <td style={{width:'500px'}}>
                    <ul  style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝑭𝒐𝒐𝒕𝒆𝒓 𝒕𝒆𝒙𝒕 𝒐𝒏𝒆 - 𝒉𝒆𝒂𝒅𝒆𝒓 
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none', lineHeight:'80px'}}>Cinnamon Hotels & Resorts</li>
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none'}}>John Keells Group</li>
                    </ul>
                </td>

                <td style={{width:'500px'}}>
                    
                </td>

                <td style={{width:'500px'}}>
                    <ul  style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝑭𝒐𝒐𝒕𝒆𝒓 𝒕𝒆𝒙𝒕 𝒕𝒘𝒐 - 𝒉𝒆𝒂𝒅𝒆𝒓 
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none', lineHeight:'80px'}}>Cinnamon Hotels & Resorts</li>
                        <li style={{color:'#8f8c8f' , fontSize:'15px', listStyleType:'none'}}>John Keells Group</li>
                    </ul>
                </td>


            </tr>

            <br/><br/>

            <tr>
            <td style={{width:'500px'}}>
                    <ul  style={{color:'#0a3b8e', fontSize:'25px'}}>
                    𝘗𝘭𝘦𝘢𝘴𝘦 𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘜𝘴
                    <br/><br/>
                        <input type='text' placeholder='Email Address'  style={{color:'#d6d2d6', fontSize:'15px', width:'400px', height:'70px', border: ' 0.7px solid #d6d2d6'}}></input>
                        <button type='submit' style={{ position: 'absolute',  height: '70px', width: '40px', outline:'none', border: 'none', marginLeft:'-40px' }}>
                        <i className="fa-solid fa-chevron-right" ></i>
                        </button>
                    </ul>

                    <ul>
                        <label>
                          <input type="radio" className="option-input radio" name="example" />
                           <li style={{ listStyleType:'none', marginLeft:'30px', marginTop:'-15px'}}>
                             Consent form for the provements, the user can click on the button and conform to the <span style={{fontWeight: 'bold'}}>privacy and policy </span> terms.
                           </li>
                        </label>
                    </ul>
                    
                </td>
            </tr>
          
        </table>

        <div >
            

        <img src={footer4} alt="" 
            style={{ width:'100%', height:'450px', transform: 'scaleX(-1)', marginTop:'-180px'
            }}
           >
        </img>     
    
            
        </div>
    
    
        </div>

        
        
        </div>
        
    </div>
  );
};

export default Footer;
