<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import SearchBar from "./components/SearchBar.vue";
import WeatherContainer from "./components/WeatherContainer.vue";

const weatherStore = useWeatherStore();
</script>

<template>
  <div class="flex justify-center w-full h-full font-montserrat">
    <div
      class="flex flex-col items-center h-full bg-radial from-[hsl(195,50%,65%)] to-[hsl(195,50%,55%)] w-[800px] max-w-[100vw]"
    >
      <SearchBar />
      <WeatherContainer v-loading="weatherStore.loadingStatus" />
    </div>
  </div>
</template>

<style scoped></style>
