import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { OneCallObj } from '../../objects/OneCallObj';
import WeatherImage from './WeatherImage';
  
interface MyProps  {
    data: OneCallObj
  }
    
const WeatherDays: React.FC<MyProps> = (props) => {

    return (
        <div style={{ display: 'flex' }}>
               {props.data.daily.map(({ weather }) => (
               <WeatherImage className="margintopAuto" size={100} icon={weather[0].icon} 
                                description={weather[0].description} 
                                main={weather[0].main}></WeatherImage>
                ))} 
        </div>)

}
    
export default WeatherDays;