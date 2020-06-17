import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';


function Room({name, setRoomTemp, setLitState}) {
    let [isLit, setLit] = useState(setLitState)
    let [roomTemp, setTemp] = useState(setRoomTemp)

    return (
        <div className={`room ${isLit? "lit": "dark"}`}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Dear {name}! your room is {isLit ? 'lit': 'dark'}, please put switch {isLit? 'OFF':'ON'} to {isLit ? 'dark': 'lit'} the room.</p>
            <p>Currently your Room temperature is at {roomTemp} <span>&#176;</span>F. To increase it use '+' and to decrease it use '-'. Thank you.</p>
            <br/>
            <button className="button" onClick={()=>{console.log("Set Lit to ON"); setLit(true);}}>ON</button>
            <button className="button" onClick={()=> {console.log("lit on off"); setLit(!isLit);}}>Switch</button>
            <button className="button" onClick={()=>{console.log("Set Lit to OFF"); setLit(false);}}>OFF</button>
            <br/>                              
            <button className="button" onClick={()=> {console.log("Room Temp increase"); setTemp(++roomTemp);}}>+</button>
            <button className="button" onClick={()=> {setTemp(setRoomTemp);}}>Set to Initial Temperature</button>
            <button className="button" onClick={()=> {console.log("Room Temp decrease"); setTemp(--roomTemp);}}>-</button>
        </div>
    );
  }
  
  

  export default Room;