import axios from "axios";



const customAxios =  axios.create({
  baseURL: process.env.REACT_APP_WEATHER_SERVICE_URL,
  headers: {
    "Content-type": "application/json"
  },
  params: {
      "appid": process.env.REACT_APP_WEATHER_APP_ID
  }
});

customAxios.interceptors.request.use((config) => {
  console.log("request!!!")
  return config;
}, (error) => {
   console.error("ERROR: ", error); 
  return Promise.reject(error);
});

export default customAxios;