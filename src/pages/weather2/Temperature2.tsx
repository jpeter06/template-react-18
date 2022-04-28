import  React, { useState, useEffect } from 'react';

export interface TempProps {
    temp: number;
  }

const Temperature2: React.FC<TempProps> = (prop) => {
    const [data, setTemperature] = useState(prop.temp);


    useEffect(() => {
        setTemperature(prop.temp);
      }, [prop]);

  return (
    <div className="temperatura margintopAuto dataColor flexStart">{Math.trunc(data)}º </div>
  );
}

export default Temperature2;