interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
interface Clouds {
  all: number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface Coordinates {
  lon: number;
  lat: number;
}
export interface WeatherResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface BasicData {
  name?: string;
  tag?: string;
  icon?: string;
  current?: number;
  weatherType?: string;
  humidity?: number;
}

export interface ExtraDataTree {
  label?: string;
  children?: ExtraDataTree[];
}
