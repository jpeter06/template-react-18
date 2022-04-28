import React from "react";
import DataService from "../../services/data.service";
import Temperature2 from "./Temperature2";
import Temperature from "./Temperature";
import WeatherImage2 from "./WeatherImage2";
import './Weather2.scss';

var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016

class Weather2 extends React.Component<{}, { date: Date, city:string, weather:any,
                                             lat:number, lon:number }> {

    options = { dateStyle: 'short' } as const;
    formater = new Intl.DateTimeFormat('en-GB', {  timeStyle: 'short' });
    constructor(props:any) {
        super(props);
        this.state = {
            date: new Date(),
            city: '',
            weather:null,
            lat:35,
            lon:139
          };

        navigator.geolocation.getCurrentPosition(this.success.bind(this), null);
    }

    success(pos:any) {
        var crd = pos.coords;
        this.setState({...this.state, lat:crd.latitude, lon: crd.longitude})
        this.updateMaxMin();
      };

    updateMaxMin = async (city?:string) => {
        const req = city ? DataService.weatherCity(city) : DataService.weather(this.state.lat, this.state.lon);
        const res = await req;
        this.setState({city:res.data.name, 
                    weather: res.data})
    }


    render() {
        const wdata = this.state.weather?.weather[0];
        let cuerpo;
        if (wdata) {
            cuerpo = 
                <div className="vflex flexGrow1 flexContentCenter"> 
                    <div  className="hcenter">sunrise:{this.formater.format(new Date(this.state.weather?.sys.sunrise * 1000))}
                    &nbsp;&nbsp;
                    sunset:{this.formater.format(new Date(this.state.weather?.sys.sunset * 1000))}</div> 
                    
                    <WeatherImage2 className="margintopAuto" icon={wdata.icon} 
                                description={wdata.description} 
                                main={wdata.main}></WeatherImage2>
                    <Temperature temp={this.state.weather?.main.temp}></Temperature>
                </div>;
          } else {
            cuerpo = <span>Empty</span>;
          }
        return (
            <div  className="page flexContentCenter flexStretch">
                <h1 className="bigTitle hcenter titleColor">{this.state.city}</h1>
                <div className="hcenter">
                    <button onClick={() => this.updateMaxMin()}>local</button>
                    <button onClick={() => this.updateMaxMin('Paris')}>Paris</button>
                    <button onClick={() => this.updateMaxMin('Mehamn')}>Mehamn</button>
                    <button onClick={() => this.updateMaxMin('Málaga')}>Málaga</button>
                    <button onClick={() => this.updateMaxMin('Madrid')}>Madrid</button>
                    <button onClick={() => this.updateMaxMin('Barcelona')}>Barcelona</button>
                    <button onClick={() => this.updateMaxMin('Valencia')}>Valencia</button>
                </div>
                {cuerpo}
            </div>
        )
    }
}

export default Weather2;