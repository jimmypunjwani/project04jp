import React from 'react';
import './App.css';
import './Room.js';
import Room from './Room.js';


function App() {
  return (
    <div className="room">
      <header className="room">
        <Room name="Jimmy Punjwani" setRoomTemp={72} setLitState={false}/>
      </header>
    </div>
  );
}

export default App;
