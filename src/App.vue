<script setup lang="ts">
import { useWeatherStore } from "./store/store";
import SearchBar from "./components/SearchBar.vue";
import WeatherContainer from "./components/WeatherContainer.vue";
import WeatherIcons from "./components/WeatherIcons.vue";
import Banner from "./components/Banner.vue";
import { storeToRefs } from "pinia";

const { weatherData, errorStatus, loadingStatus } = storeToRefs(
  useWeatherStore()
);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full font-montserrat"
  >
    <Banner />
    <div
      class="flex flex-col items-center flex-1 bg-radial from-[hsl(195,50%,65%)] to-[hsl(195,50%,55%)] w-[800px] max-w-[100vw] shadow-[0px_0px_15px_hsl(195,83%,15%)]"
    >
      <div
        v-if="!weatherData"
        class="flex flex-col flex-1 justify-center items-center"
      >
        <div
          class="w-[35em] max-w-[70vw] flex flex-col items-center justify-center text-center gap-3 md:gap-5"
        >
          <p class="text-xl md:text-3xl font-bold">
            Welcome!<br />Ready to explore today's weather?
          </p>
          <WeatherIcons />
          <p class="text-base md:text-xl w-[25em] max-w-[60vw] mb-3 md:mb-5">
            Whether you're chasing the sun or bracing for rain, we've got you
            covered
          </p>
        </div>
        <SearchBar />
        <div
          v-if="errorStatus"
          class="text-[hsl(346,84%,45%)] w-[20em] max-w-[80%] text-base md:text-xl text-center"
        >
          {{ errorStatus + ". Please try again with different input." }}
        </div>
      </div>
      <div v-else>
        <SearchBar />
      </div>
      <WeatherContainer v-loading="loadingStatus" />
      <div v-if="!weatherData" id="pattern" class="h-[30%] w-full" />
    </div>
    <Banner />
  </div>
</template>

<style scoped></style>
