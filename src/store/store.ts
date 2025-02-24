import { defineStore } from "pinia";
import { useFetchWeather } from "../composables/useFetchWeather";
import { ref } from "vue";

export const useWeatherStore = defineStore("store", {
  state: () => ({
    weatherData: ref<Object>(),
    cityName: ref<string>(),
  }),
  getters: {},
  actions: {
    async fetch() {
      const { result, fetchWeather } = useFetchWeather();
      await fetchWeather(this.cityName as string);
      this.weatherData = result.value;
    },
    setCityName(newCityName: string) {
      this.cityName = newCityName;
    },
    async getWeatherData(inputCityName: string) {
      this.setCityName(inputCityName);
      await this.fetch();
    },
  },
});
