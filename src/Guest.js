import React, { useState } from 'react';
import './Guest.css'; // Import your CSS file for styling

const GuestCount = () => {
  const maxGuestsPerRoom = 8;

  const [showDropdown, setShowDropdown] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRoomIncrement = () => {
    if (rooms.length < maxGuestsPerRoom) {
      setRooms([...rooms, { adults: 1, children: 0 }]);
    }
  };

  const handleRoomDecrement = (roomIndex) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room, index) => index !== roomIndex));
    }
  };

  const handleAdultIncrement = (roomIndex) => {
    if (rooms[roomIndex].adults < maxGuestsPerRoom) {
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex].adults += 1;
      setRooms(updatedRooms);
    }
  };

  const handleAdultDecrement = (roomIndex) => {
    if (rooms[roomIndex].adults > 1) {
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex].adults -= 1;
      setRooms(updatedRooms);
    }
  };

  const handleChildrenIncrement = (roomIndex) => {
    if (rooms[roomIndex].adults + rooms[roomIndex].children < maxGuestsPerRoom) {
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex].children += 1;
      setRooms(updatedRooms);
    }
  };

  const handleChildrenDecrement = (roomIndex) => {
    if (rooms[roomIndex].children > 0) {
      const updatedRooms = [...rooms];
      updatedRooms[roomIndex].children -= 1;
      setRooms(updatedRooms);
    }
  };

  return (

    <div className="dropdown-container" >
      <p className="dropdown-button" onClick={toggleDropdown} style={{border: '1px solid #7e7c7c', padding: '5px', borderRadius:'3px', color:'#7e7c7c'}}>
      <i className="fa-solid fa-user" style={{color: '#627ba7'}}></i>&nbsp;&nbsp;
      {rooms.length} Room, {rooms.reduce((total, room) => total + room.adults, 0)} Adult, {rooms.reduce((total, room) => total + room.children, 0) } Children
      </p>
      {showDropdown && (

    <div className="guest-count-container" style={{ position: 'absolute' , backgroundColor:'white', width:'500px', zIndex: '1000'}} >

      <p style={{fontSize:'13px', color:'#6b696b'}}>Max. 8 guests per room</p>
      <br/>

      {rooms.map((room, index) => (
        <div key={index} className="room-section">
          <div>
           
           
            <table>
              <tr style={{backgroundColor:'#f2f2f2', lineHeight: '1', verticalAlign: 'middle'}}>
                <th style={{width:'90px'}}>

                </th>

                <th style={{width:'140px'}}>
                <div className="count-section">
                <p style={{fontSize:'12px'}}>Adult(s)</p>
                </div>
                </th>

                <th style={{width:'140px'}}>
                <div className="count-section">
                <p style={{fontSize:'12px'}}>Children (under 12)</p>
                 </div>
                  
                </th>
              </tr>

              <br/>
              <tr>
                <td>
                <p style={{fontSize:'15px'}}>Room {index + 1}</p>

                </td>

                <td style={{width:'90px'}}>
                <button onClick={() => handleAdultDecrement(index)}>-</button>
                <span>{room.adults}</span>
                <button onClick={() => handleAdultIncrement(index)}>+</button>
         
                </td>

                <td style={{width:'90px'}}>
                <button onClick={() => handleChildrenDecrement(index)}>-</button>
                <span>{room.children}</span>
                <button onClick={() => handleChildrenIncrement(index)}>+</button>
           
                </td>

                <td>
                {index !== 0 && (
                <button className="cross" style={{color:'#a26e13', border: 'none', backgroundColor: 'white', borderRadius: '50%'}} onClick={() => handleRoomDecrement(index)} >
                &#10006;
                </button>
            )}
                </td>
              </tr>
            </table>

           
           
             
           
          </div>
        </div>
      ))}
        <button onClick={handleRoomIncrement}>+ Add Room</button>
        </div>
      )}
    </div>
  );
};
export default GuestCount;
