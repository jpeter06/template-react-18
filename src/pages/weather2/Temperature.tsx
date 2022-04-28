import  React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export interface TempProps {
    temp: number;
}

const Temperature: React.FC<TempProps> = (prop) => {
    const [data, setTemperature] = useState(prop.temp);
    const props = useSpring({ val: data, from: { val: 0 } });

    useEffect(() => {
        setTemperature(prop.temp);
      }, [prop]);

  return (
      <>
    <animated.div className="temperatura margintopAuto dataColor flexStart">
        {props.val.interpolate(val => Math.floor(val) + 'º')}
    </animated.div>
    </>
  );
}

export default Temperature;
