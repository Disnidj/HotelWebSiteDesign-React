import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css'
import GuestCount from './Guest';


const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const dropdownRef = useRef(null);
  const [currentOption, setCurrentOption] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [codeHistory, setCodeHistory] = useState([]);

const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setCurrentOption(selectedOptions[selectedOptions.length - 1] || '');
      setCurrentInput(inputValues[inputValues.length - 1] || '');
    }
  };

  const handleOptionSelect = (option) => {
    
    setCurrentOption(option);
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleCodeSubmit = () => {
    setSelectedOptions([currentOption]);
    setInputValues([currentInput]);
    setCodeHistory([...codeHistory, currentInput]);
    setCurrentOption('');
    setCurrentInput('');
    setShowDropdown(false);
  };

  const handleDeleteCode = (index) => {
    const updatedCodeHistory = [...codeHistory];
    updatedCodeHistory.splice(index, 1);
    setCodeHistory(updatedCodeHistory);
  };
 
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calculateNumberOfNights = () => {
    if (!startDate || !endDate) return '1 night';
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);

   
    return `${Math.round(diffInDays)} nights`;  
    
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getNextDate = () => {
    const currentDate = new Date();
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1); // Increment the date by one day
    

    // Format the date without time
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return nextDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className="date-picker-container"
    style={{position:'absolute', marginTop:'-170px', marginLeft:'110px'}} >
      <div><i className="fa-regular fa-calendar-days" style={{color: '#627ba7'}}></i> &nbsp;</div>
        
      <div className="date-picker-column">
        
        
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText={formatDate(new Date())} // Use the current date format
          className="date-picker-container1" // Apply a class name to the DatePicker component
          style={{ border: 'none !important'  }} 
          
       
        />
      </div>
      <span/>

      <div className="date-picker-column">
        <p> {calculateNumberOfNights()}</p>
        
      </div>
      <span/>

      <div className="date-picker-column">
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText={getNextDate(new Date())} // Use the current date+1 format
          
       
        />
    
      </div>
      <span/><span/>
      <GuestCount/>
      <span/><span/>

      <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={toggleDropdown}
        style={{
          padding: '5px',
          backgroundColor: 'white',
          color: '#969393',
          border: '1px solid #7e7c7c',
          borderRadius: '4px',
          cursor: 'pointer',
          height:'38px',
          width:'170px'
          
        }}
      >
        <i className="fa-solid fa-tags" style={{color: '#627ba7'}}></i> &nbsp;
        {selectedOptions.join(' ')} {inputValues.join(' ') || 'Special Code'}
      </button>
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px ',
            marginTop: '5px',
            width:'300px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
          }}
        >
          <div>
            <p>Corporate / Special Rate (Optional)</p>
            <br/>
            <select onChange={(e) => handleOptionSelect(e.target.value)}
            value={currentOption}
            style={{color:'gray', width:'200px'}}
            >
              <option value="" >Select Code Type    </option>
              <option value="Co-Operative">Co-Operative</option>
              <option value="Promotion">Promotion</option>
              <option value="Additional">Additional</option>
            </select>
          </div>
          <div style={{ marginTop: '10px' }}>
            <br/>
            <input
              type="text"
              value={currentInput}
              onChange={handleInputChange}
              placeholder="Enter code..."
              style={{ padding: '5px' }}
            />

         
          <button onClick={handleCodeSubmit}
              style={{ backgroundColor:'#213f70', border:'none', color:'white', marginLeft:'5px'}}  
              >Submit
          </button>

            <div style={{ marginTop: '10px', fontSize:'14px' }}>
              <p>Search History:</p>
              {codeHistory.map((code, index) => (
                <div key={index}>
                  {code}
                  <span/><span/>
                  <button onClick={() => handleDeleteCode(index)} style={{ marginLeft: '5px' , backgroundColor:'white', color:'#627ba7', border:'none'}}>
                   <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}
    </div>
    <span/><span/><span/>
    <button 
          style={{ backgroundColor:'#b5883e', border:'none', color:'white', width:'120px', height:'40px'}}  
          >Search
    </button>

 
    </div>
  );
};

export default DatePickerComponent;
