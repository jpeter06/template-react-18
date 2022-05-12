import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { DailyObj } from '../../objects/DailyObj';

export interface WeatherImageSmallProps {
  data: DailyObj;
  size?:number;
  className:String;
}
const DailyWeather: React.FC<WeatherImageSmallProps> = (props) => {
    const [data, setData] = useState(props.data);
    const imgTransition = useTransition(data, {
      from: {  opacity: 0  , transform: 'translate(64px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(-64px, 0px)'}
    })

    const textTransition = useTransition(data, {
      from: {  opacity: 0  , transform: 'translate(20px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(0px, 20px)'}
    })
    
    useEffect(() => {
        if(!data || data.weather[0].icon !== props.data.weather[0].icon
          || data.temp.max !== props.data.temp.max){//Solo animamos si cambio de datos.
          setData(props.data);
        }
      }, [props]);
  
  const animatedImage = imgTransition(
    (styles, item) => item && 
    <animated.div className="centerAbsolute100px" style={styles}>
          <img src={"http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"} alt=""></img>
    </animated.div>
  );

  const animatedText = textTransition(
    (styles, item) => item && 
    <animated.span  className="botomAbsolute" style={styles}>{item.temp.max}</animated.span>
  );

  return (<div className="margintopAuto flexStart flexGrow2" style={{width: props.size? props.size : 140,
            height: props.size? props.size : 140 ,display: 'flex', 
            justifyContent: 'end',
            flexDirection: 'column',
            alignItems: 'center'}}>
             
            <div style={{ position: 'relative', height:'100px', width:'100%'}}>
              {animatedImage}
              {animatedText}
            </div>
          </div>)

}

export default DailyWeather;