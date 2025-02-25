<script setup lang="ts">
import { useWeatherStore } from "../store/store";
const weatherStore = useWeatherStore();
</script>

<template>
  <div class="text-center">{{ weatherStore.getTemperature }}</div>
  <div class="text-center">{{ weatherStore.getPressure }}</div>
  <div class="text-center">{{ weatherStore.getMainInfo }}</div>
  <div class="text-center">{{ weatherStore.getCityTime }}</div>
  <div class="text-center">{{ weatherStore.getHumidity }}</div>
  <div class="text-center">{{ weatherStore.getVisibility }}</div>
</template>

<style scoped></style>
