<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import { onMounted } from "vue";

const weatherStore = useWeatherStore();

onMounted(async () => {
  await weatherStore.fetch("warsaw");
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div>{{ weatherStore.weatherData.name }}</div>
    <div>{{ weatherStore.weatherData.main.temp }}</div>
  </div>
</template>

<style scoped></style>
