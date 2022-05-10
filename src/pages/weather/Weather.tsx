import React from "react";
import DataService from "../../services/data.service";
import Temperature from "../../components/weather/Temperature";
import WeatherImage from "../../components/weather/WeatherImage";
import './Weather.scss';
import { DailyObj } from "../../objects/DailyObj";
import { OneCallObj } from "../../objects/OneCallObj";
import WeatherDays from "../../components/weather/weatherDays";

var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016

class Weather extends React.Component<{}, { date: Date, city:string, weather:any, weekData?:OneCallObj,
                                             lat:number, lon:number, controller?:AbortController
                                             , controller2?:AbortController }> {

    options = { dateStyle: 'short' } as const;
    formater = new Intl.DateTimeFormat('en-GB', {  timeStyle: 'short' });

    constructor(props:any) {
        super(props);
        this.state = {
            date: new Date(),
            city: '...',
            weather:null,
            weekData:undefined,
            lat:40.4165,
            lon:-3.70256,
            controller: undefined,
            controller2: undefined
          };

        navigator.geolocation.getCurrentPosition(this.success.bind(this), null);
    }

    success(pos:any) {
        var crd = pos.coords;
        this.setState({...this.state, lat:crd.latitude, lon: crd.longitude})
        this.updateMaxMin();
    };

    getNewController(){
        if(this.state.controller)  
            this.state.controller.abort();
        const controller = new AbortController();
        this.setState({controller:controller});
        return controller;
    }

    cancelController(){
        this.setState({controller:undefined});
    }

    getNewController2(){
        if(this.state.controller2)  
            this.state.controller2.abort();
        const controller2 = new AbortController();
        this.setState({controller2:controller2});
        return controller2;
    }

    cancelController2(){
        this.setState({controller2:undefined});
    }

    updateMaxMin = async (city?:string) => {
        const controller = this.getNewController();
        const controller2 = this.getNewController2();
        const req = city ? DataService.weatherCity(city, controller.signal) : DataService.weather(this.state.lat, this.state.lon);
        req.then(res => {            
                this.cancelController(); 
                this.setState({city:res.data.name, weather: res.data});                
                this.getOneCall(res.data.coord.lat, res.data.coord.lon, controller2);
            })
            .catch(function(e) { 
                if(!controller.signal.aborted) 
                    console.debug('MaxMin error: ' + e.message ); });
    }

    getOneCall = async (lat:number, lon:number, controller2:AbortController) => {
        const req = DataService.oneCallWeather(lat, lon, controller2.signal) ;
        req.then(res => {            
                this.cancelController2(); 
               console.log("oneCallWeather received!",res.data);
               this.setState({weekData:res.data});
            })
            .catch(function(e) { 
                if(!controller2.signal.aborted) 
                    console.debug('OneCall error: ' + e.message ); 
            });
    }

    updateLatLong = async () => {
        const req = DataService.weather(this.state.lat, this.state.lon);
        const res = await req;
        this.setState({city:res.data.name, 
                    weather: res.data})
    }

    getWeekBody(){
        const weekData = this.state.weekData;
        let weeDataBody;
        if(weekData){ console.log("getWeekBody found!!")
            return <WeatherDays  data={weekData}></WeatherDays>;
        }else{
            return "";
        }
    }

    render() {
        const wdata = this.state.weather?.weather[0];
        const weekDataBody = this.getWeekBody();
        let cuerpo;
        if (wdata) {
            cuerpo = 
                <div className="vflex flexGrow1 flexContentCenter"> 
                    <div  className="hcenter">sunrise:{this.formater.format(new Date(this.state.weather?.sys.sunrise * 1000))}
                    &nbsp;&nbsp;
                    sunset:{this.formater.format(new Date(this.state.weather?.sys.sunset * 1000))}</div> 
                    {weekDataBody}
                    <WeatherImage className="margintopAuto" icon={wdata.icon} 
                                description={wdata.description} 
                                main={wdata.main}></WeatherImage>
                    <Temperature temp={this.state.weather?.main.temp}></Temperature>
                </div>;
          } else {
            cuerpo = <div className="vflex flexGrow1 flexContentCenter">Empty</div>;
          }

        
        return (
            <div  className="page flexContentCenter flexStretch">
                <h1 className="bigTitle hcenter titleColor">{this.state.city}</h1>
                <div className="hcenter">
                    <button className="mainButton" onClick={() => this.updateLatLong()}>local</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Paris')}>Paris</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Mehamn')}>Mehamn</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Málaga')}>Málaga</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Madrid')}>Madrid</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Barcelona')}>Barcelona</button>
                    <button className="mainButton" onClick={() => this.updateMaxMin('Tokio')}>Tokio</button>
                </div>
                {cuerpo}
            </div>
        )
    }
}

export default Weather;