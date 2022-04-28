import http from "../http-common";

//maxMinPeninsula?callback=angular.callbacks._4&curva=DEMANDA&fecha=2022-4-5
//prevProgPeninsula?callback=angular.callbacks._5&curva=DEMANDA&fecha=2022-4-5
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weather = (lat: number, lon:number) => {
  return http.get(`/weather?lat=${lat}&lon=${lon}&units=metric&lang=es`);
};

const weatherCity = (city:string) => {
  return http.get(`/weather?q=${city}&units=metric&lang=es`);
};


const DataService = {
  weather,
  weatherCity
};
export default DataService;