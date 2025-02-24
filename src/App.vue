<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import SearchBar from "./components/SearchBar.vue";
import WeatherContainer from "./components/WeatherContainer.vue";

const weatherStore = useWeatherStore();
</script>

<template>
  <div class="flex flex-col items-center">
    <SearchBar />
    <WeatherContainer v-if="weatherStore.weatherData" />
  </div>
</template>

<style scoped></style>
