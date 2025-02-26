import { defineStore } from "pinia";
import { useFetchWeather } from "../composables/useFetchWeather";
import type {
  WeatherResponse,
  BasicData,
  ExtraDataTree,
} from "../interfaces/interfaces";
import { ref } from "vue";

export const useWeatherStore = defineStore("store", {
  state: () => ({
    weatherData: ref<WeatherResponse>(),
    cityName: ref<string>(),
  }),
  getters: {
    getBasicData(state): BasicData {
      return {
        name: state.cityName ?? "",
        tag: state.weatherData?.sys?.country,
        icon: state.weatherData?.weather[0]?.icon,
        current: state.weatherData?.main?.temp,
        weatherType: state.weatherData?.weather[0]?.main,
        currentTime: state.weatherData?.dt,
        humidity: state.weatherData?.main?.humidity,
      };
    },
    getExtraData(state): ExtraDataTree[] {
      return [
        {
          label: "More Info",
          children: [
            {
              label: "Temperature",
              children: [
                {
                  label: `Feels Like: ${state.weatherData?.main?.feels_like}°C`,
                },
                {
                  label: `Minimal Temperature: ${state.weatherData?.main?.temp_min}°C`,
                },
                {
                  label: `Max Temperature: ${state.weatherData?.main?.temp_max}°C`,
                },
              ],
            },
            {
              label: "Pressure",
              children: [
                {
                  label: `Sea Level Pressure: ${state.weatherData?.main?.sea_level}hPa`,
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
                  label: `Timezone: ${state.weatherData?.timezone}`,
                },
                {
                  label: `Sunrise: ${state.weatherData?.sys?.sunrise}`,
                },
                {
                  label: `Sunset: ${state.weatherData?.sys?.sunset}`,
                },
              ],
            },
          ],
        },
      ];
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
