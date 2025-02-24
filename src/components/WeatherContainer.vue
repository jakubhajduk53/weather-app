<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
</script>

<template>
  <div>
    {{ weatherStore.weatherData.name }},
    {{ weatherStore.weatherData.sys.country }}
  </div>
  <div>Temperature: {{ weatherStore.weatherData.main.temp }}°C</div>
  <div>Feels Like: {{ weatherStore.weatherData.main.feels_like }}°C</div>
  <div>
    Ground Level Pressure: {{ weatherStore.weatherData.main.grnd_level }}hPa
  </div>
  <div>
    Sea Level Pressure: {{ weatherStore.weatherData.main.sea_level }}hPa
  </div>
  <div>Humidity: {{ weatherStore.weatherData.main.humidity }}%</div>
  <div>Wind Speed: {{ weatherStore.weatherData.wind.speed }}m/s</div>
  <div>Weather: {{ weatherStore.weatherData.weather[0].main }}</div>
  <div>
    Weather Description: {{ weatherStore.weatherData.weather[0].description }}
  </div>
  <div>Clouds: {{ weatherStore.weatherData.clouds.all }}%</div>
  <div>Icon: {{ weatherStore.weatherData.weather[0].icon }}</div>
  <div>Current Hour: {{ weatherStore.weatherData.dt }}</div>
  <div>Sunrise: {{ weatherStore.weatherData.sys.sunrise }}</div>
  <div>Sunset: {{ weatherStore.weatherData.sys.sunset }}</div>
  <div>Timezone: {{ weatherStore.weatherData.timezone }}</div>
  <div>
    Latitude and Longitude: {{ weatherStore.weatherData.coord.lat }}
    {{ weatherStore.weatherData.coord.lon }}
  </div>
</template>

<style scoped></style>
