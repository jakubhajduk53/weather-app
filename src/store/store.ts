import { defineStore } from "pinia";
import { useFetchWeather } from "../composables/useFetchWeather";
import type { BasicData, ExtraDataTree, State } from "../interfaces/interfaces";
export const useWeatherStore = defineStore("store", {
  state: (): State => ({
    weatherData: undefined,
    cityName: undefined,
    errorStatus: undefined,
    loadingStatus: false,
  }),
  getters: {
    getBasicData(state): BasicData {
      return {
        name: state.cityName ?? "",
        tag: state.weatherData?.sys?.country,
        icon: state.weatherData?.weather[0]?.icon,
        current: Math.round(state.weatherData?.main.temp ?? 0),
        weatherType: state.weatherData?.weather[0]?.main,
        humidity: state.weatherData?.main?.humidity,
      };
    },
    getExtraData(state): ExtraDataTree[] {
      const sunrise = new Date(
        (state.weatherData?.sys.sunrise as number) * 1000
      );
      const sunset = new Date((state.weatherData?.sys.sunset as number) * 1000);
      const lastUpdate = new Date((state.weatherData?.dt as number) * 1000);
      return [
        {
          label: "More Information",
          children: [
            {
              label: "Temperature",
              children: [
                {
                  label: `Feels Like: ${state.weatherData?.main?.feels_like}°C`,
                },
                {
                  label: `Min Temp: ${state.weatherData?.main?.temp_min}°C`,
                },
                {
                  label: `Max Temp: ${state.weatherData?.main?.temp_max}°C`,
                },
              ],
            },
            {
              label: "Pressure",
              children: [
                {
                  label: `Sea Level: ${state.weatherData?.main?.sea_level}hPa`,
                },
                {
                  label: `Ground Level: ${state.weatherData?.main?.grnd_level}hPa`,
                },
              ],
            },
            {
              label: "Time",
              children: [
                {
                  label: `Sunrise: ${sunrise.toLocaleTimeString()}`,
                },
                {
                  label: `Sunset: ${sunset.toLocaleTimeString()}`,
                },
                {
                  label: `Last updated: ${lastUpdate.toLocaleTimeString()}`,
                },
              ],
            },
            {
              label: "Visibility",
              children: [
                {
                  label: `${state.weatherData?.visibility}m`,
                },
              ],
            },
            {
              label: "Coordinates",
              children: [
                {
                  label: `Latitude: ${state.weatherData?.coord.lat}`,
                },
                {
                  label: `Longitude: ${state.weatherData?.coord.lon}`,
                },
              ],
            },
          ],
        },
      ];
    },
    isCitySelected(state) {
      return state.weatherData !== undefined;
    },
  },
  actions: {
    async fetch() {
      const { result, error, fetchWeather } = useFetchWeather();
      this.loadingStatus = true;
      await fetchWeather(this.cityName as string);
      this.loadingStatus = false;
      this.weatherData = result.value;
      this.errorStatus = error.value;
    },
    clear() {
      this.weatherData = undefined;
      this.cityName = undefined;
      this.errorStatus = undefined;
      this.loadingStatus = false;
    },
    async getWeatherData(inputCityName: string) {
      this.clear();
      this.cityName = inputCityName;
      await this.fetch();
    },
  },
});
