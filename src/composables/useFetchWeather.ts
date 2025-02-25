import { ref } from "vue";
import type { WeatherResponse } from "../interfaces/interfaces";

const apiKey = import.meta.env.VITE_API_KEY;

export const useFetchWeather = () => {
  const result = ref<WeatherResponse>();
  const loading = ref(false);
  const error = ref<string>();

  const fetchWeather = async (cityName: string) => {
    loading.value = true;
    error.value = undefined;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data: WeatherResponse = await response.json();
      result.value = data;
    } catch (e) {
      error.value = (e as Error).message;
    } finally {
      loading.value = false;
    }
  };

  return { result, fetchWeather, loading, error };
};
