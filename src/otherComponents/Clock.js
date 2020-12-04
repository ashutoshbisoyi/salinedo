import React, { useState } from 'react';
const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [clockTime, updateClock] = useState(time);

  const RefreshClock = () => {
    updateClock(new Date().toLocaleTimeString());
  };

  setInterval(RefreshClock, 1000); //Just we have to add a set interval

  return (
    <div className='clock-container'>
      <p>{clockTime}</p>
    </div>
  );
};
export default Clock;
