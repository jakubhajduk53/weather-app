<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import SearchBar from "./components/SearchBar.vue";
import WeatherContainer from "./components/WeatherContainer.vue";

const weatherStore = useWeatherStore();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full font-montserrat"
  >
    <div
      class="h-4 w-full bg-[hsl(195,83%,15%)] shadow-[0px_0px_5px_hsl(195,83%,15%)]"
    ></div>
    <div
      class="flex flex-col items-center h-full bg-radial from-[hsl(195,50%,65%)] to-[hsl(195,50%,55%)] w-[800px] max-w-[100vw] shadow-[0px_0px_15px_hsl(195,83%,15%)]"
    >
      <SearchBar />
      <WeatherContainer v-loading="weatherStore.loadingStatus" />
      <div
        v-if="!weatherStore.weatherData"
        class="w-[35em] max-w-[70vw] flex flex-col items-center justify-center text-center text-[hsl(195,83%,15%)] flex-1"
      >
        <p class="text-xl md:text-3xl font-bold">
          Welcome!<br />Ready to explore today's weather?
        </p>
        <div class="flex">
          <i
            class="bx bx-sun text-7xl md:text-9xl self-center text-[hsl(42,100%,70%)]"
          />
          <i
            class="bx bx-cloud text-7xl md:text-9xl self-center text-[hsl(42,10%,90%)]"
          />
          <i
            class="bx bx-cloud-rain text-7xl md:text-9xl self-center text-[hsl(195,50%,38%)]"
          />
          <i
            class="bx bx-cloud-snow text-7xl md:text-9xl self-center text-[hsl(42,30%,98%)]"
          />
        </div>
        <p class="text-base md:text-xl w-[25em] max-w-[60vw]">
          Whether you're chasing the sun or bracing for rain, we've got you
          covered
        </p>
      </div>
      <div
        v-if="!weatherStore.weatherData"
        id="pattern"
        class="h-[30%] w-full"
      ></div>
    </div>
    <div
      class="h-4 w-full bg-[hsl(195,83%,15%)] shadow-[0px_0px_5px_hsl(195,83%,15%)]"
    ></div>
  </div>
</template>

<style scoped></style>
