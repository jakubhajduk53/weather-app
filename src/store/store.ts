import { defineStore } from "pinia";
import { useFetchWeather } from "../composables/useFetchWeather";
import type {
  WeatherResponse,
  Temperature,
  Pressure,
  MainInfo,
  Time,
  Humidity,
  Visibility,
} from "../interfaces/interfaces";
import { ref } from "vue";

export const useWeatherStore = defineStore("store", {
  state: () => ({
    weatherData: ref<WeatherResponse>(),
    cityName: ref<string>(),
  }),
  getters: {
    getTemperature(state): Temperature {
      return {
        current: state.weatherData?.main?.temp,
        feelsLike: state.weatherData?.main?.feels_like,
        minTemperature: state.weatherData?.main?.temp_min,
        maxTemperature: state.weatherData?.main?.temp_max,
      };
    },
    getPressure(state): Pressure {
      return {
        pressure: state.weatherData?.main?.pressure,
        groundLevel: state.weatherData?.main?.grnd_level,
        seaLevel: state.weatherData?.main?.sea_level,
      };
    },
    getCityName(state): string {
      return state.cityName;
    },
    getMainInfo(state): MainInfo {
      return {
        countryName: state.weatherData?.sys?.country,
        weatherType: state.weatherData?.weather[0]?.main,
        weatherDescription: state.weatherData?.weather[0]?.description,
        icon: state.weatherData?.weather[0]?.icon,
      };
    },
    getCityTime(state): Time {
      return {
        currentTime: state.weatherData?.dt,
        timezone: state.weatherData?.timezone,
        sunrise: state.weatherData?.sys?.sunrise,
        sunset: state.weatherData?.sys?.sunset,
      };
    },
    getHumidity(state): Humidity {
      return {
        humidity: state.weatherData?.main?.humidity,
      };
    },
    getVisibility(state): Visibility {
      return {
        visibility: state.weatherData?.visibility,
      };
    },
  },
  actions: {
    async fetch() {
      const { result, fetchWeather } = useFetchWeather();
      await fetchWeather(this.cityName as string);
      this.weatherData = result.value;
    },
    async getWeatherData(inputCityName: string) {
      this.cityName = inputCityName;
      await this.fetch();
    },
  },
});
