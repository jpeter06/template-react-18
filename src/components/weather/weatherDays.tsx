import  React from 'react';
import { OneCallObj } from '../../objects/OneCallObj';
import DailyWeather from './DailyWeather';

  
interface MyProps  {
    data: OneCallObj
  }
    
const WeatherDays: React.FC<MyProps> = (props) => {

    return (
        <div style={{ overflow: 'hidden', width: '100%',height: '120px'}}>
          <div style={{ display: 'flex', overflowX: 'auto',  overflowY: 'hidden',
           width: '100%', paddingBottom: '15px', justifyContent:'center'}}>
               {props.data.daily.map((data) => (
               <DailyWeather className="margintopAuto" size={110} data={data}></DailyWeather>
                ))} 
          </div>
        </div>
    )

}
    
export default WeatherDays;