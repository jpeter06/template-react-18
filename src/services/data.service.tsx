import http from "../http-common";

//maxMinPeninsula?callback=angular.callbacks._4&curva=DEMANDA&fecha=2022-4-5
//prevProgPeninsula?callback=angular.callbacks._5&curva=DEMANDA&fecha=2022-4-5
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weather = (lat: number, lon:number, signal?: AbortSignal) => {
  return http.get(`/weather?lat=${lat}&lon=${lon}&units=metric&lang=es`,{   signal: signal });
};

const weatherCity = (city:string, signal?: AbortSignal) => {
  return http.get(`/weather?q=${city}&units=metric&lang=es`,{   signal: signal });
};

const oneCallWeather = (lat: number, lon:number, signal?: AbortSignal) => {
  return http.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es`,{   signal: signal });
};

const forecastWeather = (lat: number, lon:number, signal?: AbortSignal) => {
  return http.get(`/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es`,{   signal: signal });
};

//Necesita pago
const dailyWeather = (lat: number, lon:number, numDays:number, signal?: AbortSignal) => {
  return http.get(`/forecast/daily?lat=${lat}&lon=${lon}&cnt=${numDays}&units=metric&lang=es`,{   signal: signal });
};



const DataService = {
  weather,
  weatherCity,
  oneCallWeather,
  forecastWeather,
  dailyWeather
};
export default DataService;