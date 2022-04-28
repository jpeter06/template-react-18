import  React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

export interface WeatherData {
    main: string;
    description:string;
    icon:string;
    className:string;
  }

const WeatherImage2: React.FC<WeatherData> = (props) => {
    const [data, setData] = useState(props);
        const imgTransition = useTransition(data, {
          from: {  opacity: 0  , transform: 'translate(64px, 0px)'},
          enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
          leave: { opacity: 0 , transform: 'translate(-64px, 0px)'}
        })
    
        const textTransition = useTransition(data, {
          from: {  opacity: 0  , transform: 'translate(24px, 0px)'},
          enter: { opacity: 1 , transform: 'translate(0px, 0px)'},
          leave: { opacity: 0 , transform: 'translate(0px, 20px)'}
        })
    
    useEffect(() => {
        setData(props);
      }, [props]);
  
  const animatedImage = imgTransition(
    (styles, item) => item && 
    <animated.div className="centerAbsolute100px" style={styles}>
          <img src={"http://openweathermap.org/img/wn/" + item.icon + "@2x.png"} alt=""></img>
    </animated.div>
  );

  const animatedText = textTransition(
    (styles, item) => item && 
    <animated.span  className="botomAbsolute" style={styles}>{item.description}</animated.span>
  );

  return (<div className="margintopAuto flexStart flexGrow2" style={{width: 140,
            height: 140,display: 'flex', 
            justifyContent: 'end',
            flexDirection: 'column',
            alignItems: 'center'}}>
             
            <div style={{ position: 'relative', height:'100px', width:'100%'}}>
              {animatedImage}
              {animatedText}
            </div>
          </div>)

}

export default WeatherImage2;