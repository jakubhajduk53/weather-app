<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import SearchBar from "./components/SearchBar.vue";

const weatherStore = useWeatherStore();
</script>

<template>
  <div class="flex flex-col items-center">
    <SearchBar />
    <div v-if="weatherStore.weatherData">{{ weatherStore.weatherData }}</div>
  </div>
</template>

<style scoped></style>
