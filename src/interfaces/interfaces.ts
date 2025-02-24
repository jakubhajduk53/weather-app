interface TemperatureArray {
  current: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
}
interface WeatherTypeArray {
  weatherType: string;
  weatherDescription: string;
  clouds: number;
  icon: string;
}
interface PressureArray {
  pressure: number;
  groundLevel: number;
  seaLevel: number;
}
interface TimeArray {
  current: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface WeatherArray {
  cityName: string;
  countryTag: string;
  weather: WeatherTypeArray[];
  temperature: TemperatureArray[];
  humidity: number;
  windSpeed: number;
  pressure: PressureArray[];
  visibility: number;
  time: TimeArray[];
  coordinates: Coordinates[];
}
