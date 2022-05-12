import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

export interface WeatherIconData {
    icon: string;
    size?:number;
  }

const WeatherIcon: React.FC<WeatherIconData> = (props) => {
    const [icon, setIcon] = useState(props.icon);
    const imgTransition = useTransition(icon, {
      from: {  opacity: 0  , transform: 'translate(64px, 0px)'},
      enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
      leave: { opacity: 0 , transform: 'translate(-64px, 0px)'}
    })


    
    useEffect(() => {
        if(!icon || icon !== props.icon){//Solo animamos si cambio de datos.
          setIcon(props.icon);
        }
      }, [props]);
  
  const animatedImage = imgTransition(
    (styles, item) => item && 
    <animated.div className="centerAbsolute100px" style={styles}>
          <img src={"http://openweathermap.org/img/wn/" + item + "@2x.png"} alt=""></img>
    </animated.div>
  );

  return ( <div>{animatedImage}</div>  )

}

export default WeatherIcon;