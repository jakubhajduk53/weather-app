import { ref } from "vue";

export const useFetchWeather = () => {
  const result = ref<null>();
  const loading = ref(false);
  const error = ref<string>();

  const fetchWeather = async () => {
    loading.value = true;
    error.value = undefined;
    try {
      const response = await fetch("");
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data: null = await response.json();
      result.value = data;
    } catch (e) {
      error.value = (e as Error).message;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWeather, loading, error };
};
