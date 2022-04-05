import { useState, useEffect } from 'react';

function Clock(props){
  const [date, setDate] = useState(new Date());

  
  function refreshClock() {
    setDate(new Date());
  }

  //Mount
  useEffect(() => { console.log("Mount useEffect: " + props.origen);
    const timerId = setInterval(refreshClock, 1000);
    //Unmount
    return function cleanup() {console.log("Unmount useEffect: " + props.origen)
      clearInterval(timerId);
    };
  }, []);

  return (
    <span>
      {date.toLocaleTimeString()} 
    </span>
  );
}
export default Clock;