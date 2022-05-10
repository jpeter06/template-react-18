
import { DailyObj } from './DailyObj';
import { WeatherObj } from './WeatherObj';

export interface OneCallObj {
  daily:DailyObj[], 
    lat:Number, 
    lon:Number
}