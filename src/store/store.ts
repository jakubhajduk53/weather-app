import { defineStore } from "pinia";
import { useFetchWeather } from "../composables/useFetchWeather";
import { ref } from "vue";

export const useWeatherStore = defineStore("store", {
  state: () => ({
    weatherData: ref<Object>(),
  }),
  getters: {},
  actions: {
    async fetch(cityName: string) {
      const { result, fetchWeather } = useFetchWeather();
      await fetchWeather(cityName);
      this.weatherData = result.value;
    },
  },
});
