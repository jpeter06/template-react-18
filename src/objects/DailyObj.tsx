
import { WeatherObj } from './WeatherObj';

export interface DailyObj {
    dt: Number;
    sunrise:Number;
    sunset:Number;
    weather:WeatherObj[];
  }