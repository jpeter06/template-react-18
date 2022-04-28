import  React, { useState, useEffect } from 'react';

export interface TempProps {
    temp: number;
  }

const Temperature: React.FC<TempProps> = (prop) => {
    const [data, setTemperature] = useState(prop.temp);


    useEffect(() => {
        setTemperature(prop.temp);
      }, [prop]);

  return (
    <div>
      <p>Temperatura: {data}º</p>
    </div>
  );
}

export default Temperature;