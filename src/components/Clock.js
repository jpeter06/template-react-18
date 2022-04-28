import { useState, useEffect } from 'react';

function Clock(props){
  const [date, setDate] = useState(new Date());

  
  function refreshClock() {
    setDate(new Date());
  }

  //After Render!
  useEffect(() => { 
    const timerId = setInterval(refreshClock, 1000);
    //Unmount
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span class={props.clase}>
      {date.toLocaleTimeString()} 
    </span>
  );
}
export default Clock;