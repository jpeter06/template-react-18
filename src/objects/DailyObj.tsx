
import { TempObj } from './TempObj';
import { WeatherObj } from './WeatherObj';

export interface DailyObj {
    dt: Number;
    sunrise:Number;
    sunset:Number;
    temp:TempObj,
    weather:WeatherObj[];
  }