import { Any } from '@react-spring/types';
import   {  Component, PureComponent } from 'react';
import { Transition, animated, config  } from 'react-spring';
import { DailyObj } from '../../objects/DailyObj';
import { OneCallObj } from '../../objects/OneCallObj';

interface Valor { 
    fig:number , 
    op:{range:Number[],
    output:Number[]}, 
    trans:{
        range:Number[], 
        output:Number[],
        extrapolate:String
    }
};

interface MyProps  {
    data: OneCallObj
  }
  
interface MyState  {
  items: Valor[],
  daily:DailyObj[]
}

const NUM_TRANS: Valor[] = [
    { fig:0, op:{range:[0.75,1],output:[0,1]}, trans:{range:[0.75,1],output:[-40,0],extrapolate:"clamp"}}, 
    { fig:1, op:{range:[0.25,0.5],output:[0,1]}, trans:{range:[0.25,0.5],output:[-40,0],extrapolate:"clamp"}}, 
    { fig:2, op:{range:[0.25,0.5],output:[0,1]}, trans:{range:[0.25,0.5],output:[-40,0],extrapolate:"clamp"}}];

export class WeatherDays2 extends PureComponent<MyProps, MyState> {
  
        constructor(props:MyProps) {
          super(props)
      
          this.state = {
            items: NUM_TRANS,
            daily:props.data.daily
          }
        }
 
        componentDidUpdate(prevProps:any, prevState:any) { console.log("update!",prevProps,this.props)
            const { items: currItems } = this.state
            const { items: prevItems } = prevState
            if (prevProps.data.lat !== this.props.data.lat) {
                this.setState({  items: NUM_TRANS , daily:this.props.data.daily })
            }
          }

        render() {
            return (
              <div style={{ display: 'flex' }}>
                <Transition
                  items={this.state.items}
                  from={{ opacity: 0.1 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0.1 }}
                  delay={200}
                  config={config.molasses}>
                  {({ opacity }, item) => (
                    <animated.div
                      style={{
                        opacity: opacity.to(item.op),
                        transform: opacity
                          .to(item.trans)
                         // .to(y => `translate3d(0,${y}px,0)`),
                      }}>
                      <img src={"http://openweathermap.org/img/wn/" + this.state.daily[item.fig].weather[0].icon + "@2x.png"} alt=""></img>
                    </animated.div>
                  )}
                </Transition>
              </div>
            )
          }
      }