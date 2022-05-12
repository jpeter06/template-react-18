import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { DailyObj } from '../../objects/DailyObj';

export interface WeatherImageSmallProps {
  data: DailyObj;
  size?:number;
  className:String;
}
const DailyWeather: React.FC<WeatherImageSmallProps> = (props) => {
  const [temp, setTemp] = useState(props.data.temp);
  const [icon, setIcon] = useState(props.data.weather[0].icon);
  const imgTransition = useTransition(icon, {
      from: {  opacity: 0  , transform: 'translate(15px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(-15px, 0px)'}
    })

    const textTransition = useTransition(temp, {
      from: {  opacity: 0  , transform: 'translate(0px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(0px, 0px)'}
    })
    
    useEffect(() => {
      if(!icon || icon !== props.data.weather[0].icon){//Solo animamos si cambio de datos.
        setIcon(props.data.weather[0].icon);
      }
      if(!temp  || temp.max !== props.data.temp.max){//Solo animamos si cambio de datos.
        setTemp(props.data.temp);
      }
  }, [props]);
  
  const animatedImage = imgTransition(
    (styles, item) => item && 
    <animated.div className="centerAbsolute100px" style={styles}>
          <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt=""></img>
    </animated.div>
  );

  const animatedText = textTransition(
    (styles, item) => item && 
    <animated.span  className="botomAbsolute" style={styles}>{Math.ceil(temp.max as number)}º / {Math.floor(temp.min as number)}º</animated.span>
  );

  return (             
            <div style={{ position: 'relative', flexShrink: 0,
              width: props.size? props.size : 140,display: 'inline-flex',
              height: props.size? props.size : 140 }}>
              {animatedImage}
              {animatedText}
            </div>
          )

}

export default DailyWeather;