import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { TempObj } from '../../objects/TempObj';

 interface WeatherTempData {
    temp: TempObj;
    size?:number;
  }

const WeatherTemp: React.FC<WeatherTempData> = (props) => {
    const [temp, setTemp] = useState(props.temp);

    const textTransition = useTransition(temp, {
      from: {  opacity: 0  , transform: 'translate(20px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(0px, 20px)'}
    })
    
    useEffect(() => {
        if(!temp || temp !== props.temp){//Solo animamos si cambio de datos.
          setTemp(props.temp);
        }
      }, [props]);

  const animatedText = textTransition(
    (styles, item) => item && 
    <animated.span  className="botomAbsolute" style={styles}>{item.max}</animated.span>
  );

  return (<div>{animatedText}</div>)

}

export default WeatherTemp;