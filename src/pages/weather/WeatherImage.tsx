import  React, { useState, useEffect } from 'react';
import { useTransition, useSpring, animated } from 'react-spring';

export interface WeatherData {
    main: string;
    description:string;
    icon:string;
  }

const WeatherImage: React.FC<WeatherData> = (props) => {
    const [data, setData] = useState(props);
    const sprops = useSpring({ //loop: true,
      reset: true,
      from: { opacity: 0, transform: 'translate(0px, 4px)' },
      to: { opacity: 1 , transform: 'translate(0px, 0px)}'} })

    const spanProps = useSpring({ //loop: true,
        reset: true,
        from: { opacity: 0 },
        to: { opacity: 1 } })
  
      /*const transitions = useTransition(data, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      
    })*/


    useEffect(() => {
        setData(props);
      }, [props]);

  const icono = !data ? 'none' : "http://openweathermap.org/img/wn/" + data.icon + "@2x.png"; 
  
  return (<div style={{width: 220,
            height: 140,display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
            <animated.div style={sprops}>
              <img src={icono} alt=""></img> 
            </animated.div>
            <animated.span  style={spanProps}>{data.description}</animated.span>
          </div>)

}

export default WeatherImage;