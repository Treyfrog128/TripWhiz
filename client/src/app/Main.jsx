import React, { useState } from 'react';
import Nav from './Nav'
import Sidebar from './Sidebar'
import Days from './Days'

function Main() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='main'>
      <div className='upper'>
        <Nav />
      </div>
      <div className='lower'>
        <Sidebar />
        <Days />
      </div>
    </div>
  );
}

export default Main;