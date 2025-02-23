<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import { onMounted } from "vue";
import SearchBar from "./components/SearchBar.vue";

const weatherStore = useWeatherStore();

onMounted(async () => {
  await weatherStore.fetch();
});
</script>

<template>
  <div class="flex flex-col items-center">
    <SearchBar />
    <div>{{ weatherStore.weatherData }}</div>
  </div>
</template>

<style scoped></style>
